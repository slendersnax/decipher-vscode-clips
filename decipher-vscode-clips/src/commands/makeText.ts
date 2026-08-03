import * as vscode from "vscode";

import { makeText } from "../transformers/makeText";

export function registerMakeText(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "decipher.makeText",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            editor.edit(editBuilder => {
                for (const selection of editor.selections) {
                    const text = editor.document.getText(selection);
                    const output = makeText(text);
                    editBuilder.replace(selection, output);
                }
            });

        }
    );

    context.subscriptions.push(disposable);
}