import { tidyQuestionInput } from "../helpers/tidyQuestion";

export function makeComment(text: string): string {
    const question = tidyQuestionInput(text);

    let input = question.input;
    let label = question.label.trim();
    let title = question.title.trim();

    // there isn't a proper title in an <html> tag so this is a workaround
    // we'll see how well it does
    return `
<html
    label="${label}"
    where="survey">
    ${title}
</html>
`.trim();
}