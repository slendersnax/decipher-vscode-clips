import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeCheckbox(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    let outputSpl = question.input.split("\n");

    let excl_array = [">None of the above",">None of these",">None of the Above",">None of These"];
    let noAns = "<noanswer";

    // looking for text that designates a row as exclusive, and giving it
    // the necessary properties
    for (let oi = 0; oi < outputSpl.length; oi ++) {
        if (!outputSpl[oi].includes(noAns)) {
            for (let ei = 0; ei < excl_array.length; ei ++) {
                if (outputSpl[oi].includes(excl_array[ei])) {
                    let newOutput = outputSpl[oi].replace(excl_array[ei], ` exclusive="1" randomize="0"${excl_array[ei]}`);
                    
                    outputSpl[oi] = newOutput;

                    break;
                }
            }
        }
    }

    let output = outputSpl.join("\n");

    if (!input.includes("<comment>")) {
        return `
<checkbox 
  label="${label}"
  atleast="1">
  <title>${title}</title>
  <comment>Select all that apply</comment>

  ${output}
</checkbox>
<suspend/>
`.trim();
    }
    else {
        return `
<checkbox 
  label="${label}"
  atleast="1">
  <title>${title}</title>
  ${output}
</checkbox>
<suspend/>
`.trim();
    }
}