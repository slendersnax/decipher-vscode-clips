import { ParsedItem } from "../types/ParsedItem";

export function parseLine(input: string): ParsedItem {
    let splitLine = input.split(" ");

    // doing it this way because if I assign .shift() directly
    // it complains that "iT cOuLd be UnDeFiNeD"
    let label = "";
    
    if (splitLine.length > 1) {
        label = splitLine[0].replace(".", "").replace(")", "").replace(":", "");
        splitLine.shift();
    }
    else {
        label = "";
    }

    let text = splitLine.join(" ");

    return {
        label,
        text
    };
}