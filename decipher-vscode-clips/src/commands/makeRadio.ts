import * as vscode from "vscode";

import { makeRadio } from "../transformers/makeRadio";

export function registerMakeRadio(context: vscode.ExtensionContext) {
    console.log("test 2");

    const disposable = vscode.commands.registerCommand(
        "decipher.makeRadio",
        () => {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            editor.edit(editBuilder => {
                for (const selection of editor.selections) {
                    const text = editor.document.getText(selection);
                    const output = makeRadio(text);
                    editBuilder.replace(selection, output);
                }
            });

        }
    );

    context.subscriptions.push(disposable);
}