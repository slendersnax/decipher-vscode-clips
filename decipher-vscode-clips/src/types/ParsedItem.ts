export interface ParsedItem {
    label: string;
    text: string;
}

export function hasLabel(item: ParsedItem): boolean {
    return item.label !== "";
}

export function isNumericLabel(item: ParsedItem): boolean {
    return /^\d+$/.test(item.label);
}