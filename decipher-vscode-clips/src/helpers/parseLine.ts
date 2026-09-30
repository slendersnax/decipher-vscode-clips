import { ParsedItem } from "../types/ParsedItem";

export function parseLine(input: string): ParsedItem {
    input = input.replace(/\t+/g, " ").trim();

    // split on first whitespace
    const match = input.match(/^(\S+)\s+(.*)$/);

    if (!match) {
        return {
            label: "",
            text: input
        };
    }

    const label = match[1].replace(/[.):]$/, "");
    const text = match[2].trim();

    return {
        label,
        text
    };
}