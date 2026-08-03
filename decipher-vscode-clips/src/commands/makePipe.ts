import * as vscode from "vscode";

import { makePipe } from "../transformers/makePipe";

export function registerMakePipe(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "decipher.makePipe",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            editor.edit(editBuilder => {
                for (const selection of editor.selections) {
                    const text = editor.document.getText(selection);
                    const output = makePipe(text);
                    editBuilder.replace(selection, output);
                }
            });

        }
    );

    context.subscriptions.push(disposable);
}