import * as vscode from "vscode";

import { makeCheckbox } from "../transformers/makeCheckbox";

export function registerMakeCheckbox(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "decipher.makeCheckbox",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            editor.edit(editBuilder => {
                for (const selection of editor.selections) {
                    const text = editor.document.getText(selection);
                    const output = makeCheckbox(text);
                    editBuilder.replace(selection, output);
                }
            });

        }
    );

    context.subscriptions.push(disposable);
}