import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeText(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    // checking if we only have label and title
    if (input.trim() == "") {
        return `
<text 
  label="${label}"
  size="40"
  optional="0">
  <title>${title}</title>
</text>
<suspend/>`.trim();
    }

    if (!input.includes("<comment>")) {
        return `
<text 
  label="${label}"
  size="40"
  optional="0">
  <title>${title}</title>
  <comment>Please be as specific as possible</comment>

  ${input}
</text>
<suspend/>
`.trim();
    }
    else {
        return `
<text 
  label="${label}"
  size="40"
  optional="0">
  <title>${title}</title>
  ${input}
</text>
<suspend/>
`.trim();
    }
}