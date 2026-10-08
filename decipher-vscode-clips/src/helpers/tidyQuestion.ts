import { QuestionInput } from "../types/QuestionInput";
import { fixUnicode } from "./fixUnicode";

export function tidyQuestionInput(input: string): QuestionInput {
    input = input.trim();

    if (input == "") {
        let label = "";
        let title = "";

        return {
            input,
            label,
            title
        };
    }

    // Remove extra blank lines
    while (input.includes("\n\n")) {
        input = input.replace(/\n\n/g, "\n");
    }

    const labelPattern = /^([a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*)(?:\.|:|\)|\s)/;

    // Extract the question label
    const labelMatch = input.match(labelPattern);

    if (!labelMatch) {
        throw new Error("Could not determine question label.");
    }

    let label = labelMatch[1];

    // Remove the label from the input
    input = input.replace(labelPattern, "");

    // Convert 1.2 -> 1_2, A.3 -> A3 etc.
    label = label.replace(/\./g, "_");

    // testing if label starts with a digit
    if (/^\d/.test(label)) {
        label = "Q" + label;
    }

    let title = "";

    if (input.includes("@")) {
        title = input.substring(0, input.indexOf("@"));
    } else {
        // the title basically ends when the first tag starts
        // so we find the first tag's starting index, and that's where the title ends
        const tags = [
            "<row",
            "<col",
            "<choice",
            "<comment",
            "<group",
            "<net",
            "<exec",
            "<case",
            "<insert",
            "<noanswer"
        ];

        const indices = tags
            .map(tag => input.indexOf(tag))
            .filter(index => index >= 0);

        if (indices.length === 0) {
            title = input;
        } else {
            title = input.substring(0, Math.min(...indices));
        }
    }

    input = input.replace(title, "");

    title = fixUnicode(title);

    return {
        input,
        label,
        title
    };
}