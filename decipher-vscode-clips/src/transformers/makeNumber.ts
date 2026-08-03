import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeNumber(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    // checking if we only have label and title
    if (input.trim() == "") {
        return `
<number 
  label="${label}"
  size="3"
  optional="0">
  <title>${title}</title>
</number>
<suspend/>`.trim();
    }

    if (!input.includes("<comment>")) {
        return `
<number 
  label="${label}"
  size="3"
  optional="0">
  <title>${title}</title>
  <comment>Please enter a whole number</comment>

  ${input}
</number>
<suspend/>
`.trim();
    }
    else {
        return `
<number 
  label="${label}"
  size="3"
  optional="0">
  <title>${title}</title>
  ${input}
</number>
<suspend/>
`.trim();
    }
}