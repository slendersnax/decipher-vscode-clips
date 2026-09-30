
import { ParsedItem, hasLabel, isNumericLabel } from "../types/ParsedItem";
import { ItemOptions } from "../types/ItemOptions";
import { fixUnicode } from "../helpers/fixUnicode";
import { parseLine } from "../helpers/parseLine";

export function makeItems(selectedText: string, options: ItemOptions): string {
    let lines = fixUnicode(selectedText.trim())
        .split("\n")
        .map(line => line.trim())
        .filter(line => line !== "");

    const prefix = {
        row: "r",
        col: "c",
        choice: "ch",
        case: "c",
        group: "g"
    }[options.tag];

    for (let li = 0; li < lines.length; li ++) {
        let label, text, value, extra = "";
        let parsedLine: ParsedItem = parseLine(lines[li]);

        text = parsedLine.text;

        // create label and value from line text
        if (options.createLabels) {
            label = parsedLine.label;
            value = parsedLine.label;

            // if it isn't already 'r1', 'c99', etc.
            if (isNumericLabel(parsedLine)) {
                label = `${prefix}${parsedLine.label}`;
            }
        }
        else {
            label = `${prefix}${li + 1}`;
            value = `${li + 1}`;
        }

        const isOtherSpecify =
            options.tag !== "case" &&
            options.tag !== "group" &&
            text.toLowerCase().includes("other") &&
            text.toLowerCase().includes("specify");

        if (isOtherSpecify) {
            // sometimes people have something like: "Other, please specify _____" in questionnaires to flag that it's on open-ended answer
            text = text.replace(/_/g, "");
            extra = ` open="1" openSize="25" randomize="0"`;
        }

        // special cases
        if (options.tag === "case") {
            extra = ` cond=""`;
        }

        if (options.tag === "group") {
            extra = ` builder:axis="row"`;
        }

        if (options.createValues) {
            lines[li] = `  <${options.tag} label="${label}" value="${value}"${extra}>${text}</${options.tag}>`;
        }
        else {
            lines[li] = `  <${options.tag} label="${label}"${extra}>${text}</${options.tag}>`;
        }
    }

    if (options.reverse) {
        lines.reverse();
    }

    return lines.join("\n");
}