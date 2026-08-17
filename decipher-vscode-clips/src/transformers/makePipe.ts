import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makePipe(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    if (title.trim() == "") {
      return `
<pipe 
  label="${label}"
  capture="">
  ${input}
  <case label="c99" cond="1"></case>
</pipe>
<suspend/>
`.trim();
    }
    else {
      return `
<pipe 
  label="${label}"
  title="${title}"
  capture="">
  ${input}
  <case label="c99" cond="1"></case>
</pipe>
<suspend/>
`.trim();
    }
}