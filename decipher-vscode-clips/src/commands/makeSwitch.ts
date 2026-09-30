import * as vscode from "vscode";

import { makeSwitch } from "../transformers/makeSwitch";
import { SwitchCommand } from "../types/SwitchCommand";

export function registerSwitchCommands(context: vscode.ExtensionContext) {
    const commands: SwitchCommand[] = [
        {
            id: "decipher.switchRowsCols",
            options: {
                tag_1: "row",
                tag_2: "col"
            }
        },
        {
            id: "decipher.switchRowsChoices",
            options: {
                tag_1: "row",
                tag_2: "choice"
            }
        },
        
        {
            id: "decipher.switchColsChoices",
            options: {
                tag_1: "col",
                tag_2: "choice"
            }
        }
    ];

    for (const command of commands) {
        const disposable = vscode.commands.registerCommand(
            command.id,
            () => {
                const editor = vscode.window.activeTextEditor;

                if (!editor) {
                    return;
                }

                editor.edit(editBuilder => {
                    for (const selection of editor.selections) {
                        const text = editor.document.getText(selection);
                        const output = makeSwitch(text, command.options);
                        editBuilder.replace(selection, output);
                    }
                });

            }
        );

        context.subscriptions.push(disposable);
    }
}