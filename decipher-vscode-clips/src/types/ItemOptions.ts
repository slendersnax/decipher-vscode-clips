export interface ItemOptions {
    tag: "row" | "col" | "choice" | "case" | "group";

    parseLabels: boolean; // i.e extract labels from the text of the row, col, choice
    createValues: boolean;

    reverse: boolean;
}