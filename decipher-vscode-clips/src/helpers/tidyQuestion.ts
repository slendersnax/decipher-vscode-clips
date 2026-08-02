import { QuestionInput } from "../types/QuestionInput";

export function tidyQuestionInput(input: string): QuestionInput {
    input = input.trim();

    // Convert 1.2 -> 1_2
    input = input.replace(/^(\w?\d+)\.(\d+)/, "$1_$2");

    // Remove extra blank lines
    while (input.includes("\n\n")) {
        input = input.replace(/\n\n/g, "\n");
    }

    // Extract the question label
    const labelMatch = input.match(/^([a-zA-Z0-9-_]+)(?:\.|:|\)|\s)/);

    if (!labelMatch) {
        throw new Error("Could not determine question label.");
    }

    let label = labelMatch[1];

    // Remove the label from the input
    input = input.replace(/^([a-zA-Z0-9-_]+)(?:\.|:|\)|\s)/, "");

    // testing if label is formed of digits
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
            "<exec"
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

    return {
        input,
        label,
        title
    };
}