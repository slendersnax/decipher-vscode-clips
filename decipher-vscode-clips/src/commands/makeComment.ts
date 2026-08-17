import * as vscode from "vscode";

import { makeComment } from "../transformers/makeComment";

export function registerMakeComment(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "decipher.makeComment",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            editor.edit(editBuilder => {
                for (const selection of editor.selections) {
                    const text = editor.document.getText(selection);
                    const output = makeComment(text);
                    editBuilder.replace(selection, output);
                }
            });

        }
    );

    context.subscriptions.push(disposable);
}