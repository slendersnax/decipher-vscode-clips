import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeTextarea(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    // checking if we only have label and title
    if (input.trim() == "") {
        return `
<textarea 
  label="${label}"
  optional="0">
  <title>${title}</title>
</textarea>
<suspend/>`.trim();
    }

    if (!input.includes("<comment>")) {
        let comment = "<comment>Please be as specific as possible</comment>";

        return `
<textarea 
  label="${label}"
  optional="0">
  <title>${title}</title>
  ${comment}
  ${input}
</textarea>
<suspend/>
`.trim();
    }
    else {
        return `
<textarea 
  label="${label}"
  optional="0">
  <title>${title}</title>
  ${input}
</textarea>
<suspend/>
`.trim();
    }
}