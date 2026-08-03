export function fixUnicode(text: string): string {
    return text
        .replace(/[‘’]/g, "'")
        .replace(/[“”]/g, "\"")
        .replace(/&(?=\s)/g, "&amp;")
        .replace(/…/g, "...");
}