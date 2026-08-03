import { ParsedItem, hasLabel, isNumericLabel } from "../types/ParsedItem";
import { ItemOptions } from "../types/ItemOptions";
import { fixUnicode } from "../helpers/fixUnicode";
import { parseLine } from "../helpers/parseLine";

export function makeItems(text: string, options: ItemOptions): string {
    let lines = fixUnicode(text.trim()).split("\n");

    const prefix = {
        row: "r",
        col: "c",
        choice: "ch"
    }[options.tag];

    for (let li = 0; li < lines.length; li ++) {
        let label, text, value, extra = "";
        
        let parsedLine: ParsedItem = parseLine(lines[li]);
        
        text = parsedLine.text;

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

        if (text.toLowerCase().includes("other") && text.toLowerCase().includes("specify")) {
            extra = ` open="1" openSize="25" randomize="0"`;
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