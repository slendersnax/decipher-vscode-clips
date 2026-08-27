import { SwitchOptions } from "../types/SwitchOptions";
import { fixUnicode } from "../helpers/fixUnicode";

export function makeSwitch(text: string, options: SwitchOptions): string {
    let lines = fixUnicode(text).split("\n");

    const prefix = {
        row: "r",
        col: "c",
        choice: "ch",
        case: "c",
        group: "g"
    };

    let tag_1_start = `<${options.tag_1}`;
    let tag_1_end = `</${options.tag_1}>`;
    let label_1 = `label="${prefix[options.tag_1]}`;

    let tag_2_start = `<${options.tag_2}`;
    let tag_2_end = `</${options.tag_2}>`;
    let label_2 = `label="${prefix[options.tag_2]}`;

    for (let li = 0; li < lines.length; li ++) {
        let newline = lines[li];

        if (lines[li].includes(tag_1_start)) {
            newline = lines[li].replace(tag_1_start, tag_2_start).replace(tag_1_end, tag_2_end).replace(label_1, label_2);    
        }
        else if (lines[li].includes(tag_2_start)) {
            newline = lines[li].replace(tag_2_start, tag_1_start).replace(tag_2_end, tag_1_end).replace(label_2, label_1);
        }

        lines[li] = newline;
    }

    return lines.join("\n");
}