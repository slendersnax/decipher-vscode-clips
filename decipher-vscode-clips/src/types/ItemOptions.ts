export interface ItemOptions {
    tag: "row" | "col" | "choice" | "case" | "group";

    createLabels: boolean; // i.e create labels from the text of the row, col, choice
    createValues: boolean;

    reverse: boolean;
}