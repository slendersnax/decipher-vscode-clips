import * as vscode from "vscode";

import { makeSelect } from "../transformers/makeSelect";

export function registerMakeSelect(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "decipher.makeSelect",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            editor.edit(editBuilder => {
                for (const selection of editor.selections) {
                    const text = editor.document.getText(selection);
                    const output = makeSelect(text);
                    editBuilder.replace(selection, output);
                }
            });

        }
    );

    context.subscriptions.push(disposable);
}