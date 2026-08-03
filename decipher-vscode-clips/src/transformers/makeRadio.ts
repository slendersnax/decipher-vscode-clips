import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeRadio(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    // checking if we only have label and title
    if (input.trim() == "") {
        return `
<radio 
  label="${label}" 
  where="execute">
  <title>${title}</title>
  <row label="r1" value="1">True</row>
  <row label="r0" value="0">False</row>
</radio>
<suspend/>`.trim();
    }

    let comment = "";

    if (!input.includes("<comment>")) {
        if ((input.includes("<row>")) && (input.includes("<col>"))) {
            comment = "<comment>Select one in each row</comment>\n";
        }
        else {
            comment = "<comment>Select one</comment>\n";
        }
    }

    if (!input.includes("<comment>")) {
        return `
<radio 
  label="${label}">
  <title>${title}</title>
  ${comment}
  ${input}
</radio>
<suspend/>
`.trim();
    }
    else {
        return `
<radio 
  label="${label}">
  <title>${title}</title>
  ${input}
</radio>
<suspend/>
`.trim();
    }
}