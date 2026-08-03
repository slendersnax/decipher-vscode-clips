import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeSelect(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    return `
<select 
  label="${label}"
  optional="0">
  <title>${title}</title>
  ${input}
</select>
<suspend/>
`.trim();
}