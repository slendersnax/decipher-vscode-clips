import * as vscode from "vscode";

export function registerSnippetCommands(context: vscode.ExtensionContext) {
    let snippetCommands = [
        {
            id: "decipher.insertComment", 
            name: "Comment"
        },
        {
            id: "decipher.boldText",
            name: "BoldText"
        },
        {
            id: "decipher.italicText",
            name: "ItalicText"
        },
        {
            id: "decipher.underlineText",
            name: "UnderlineText"
        }
    ]

    for (const snippet of snippetCommands) {
        context.subscriptions.push(
            vscode.commands.registerCommand(
                snippet.id,
                () => insertSnippet(snippet.name)
            )
        );
    }
}

async function insertSnippet(name: string): Promise<void> {
    await vscode.commands.executeCommand(
        "editor.action.insertSnippet",
        {
            langId: "decipher-xml",
            name
        }
    );
}