import * as vscode from "vscode";

import { makeItems } from "../transformers/makeItems";
import { ItemOptions } from "../types/ItemOptions";
import { ItemCommand } from "../types/ItemCommand";

export function registerItemCommands(context: vscode.ExtensionContext) {
    const commands: ItemCommand[] = [
        {
            id: "decipher.makeRows",
            options: {
                tag: "row",
                createLabels: false,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeRowsWithValues",
            options: {
                tag: "row",
                createLabels: false,
                createValues: true,
                reverse: false
            }
        },
        {
            id: "decipher.makeRowsMatchingLabels",
            options: {
                tag: "row",
                createLabels: true,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeRowsMatchingValues",
            options: {
                tag: "row",
                createLabels: true,
                createValues: true,
                reverse: false
            }
        },
        {
            id: "decipher.makeRowsReverse",
            options: {
                tag: "row",
                createLabels: false,
                createValues: false,
                reverse: true
            }
        },
        {
            id: "decipher.makeRowsWithValuesReverse",
            options: {
                tag: "row",
                createLabels: false,
                createValues: true,
                reverse: true
            }
        },
        {
            id: "decipher.makeCols",
            options: {
                tag: "col",
                createLabels: false,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeColsWithValues",
            options: {
                tag: "col",
                createLabels: false,
                createValues: true,
                reverse: false
            }
        },
        {
            id: "decipher.makeColsMatchingLabels",
            options: {
                tag: "col",
                createLabels: true,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeColsMatchingValues",
            options: {
                tag: "col",
                createLabels: true,
                createValues: true,
                reverse: false
            }
        },
        {
            id: "decipher.makeColsReverse",
            options: {
                tag: "col",
                createLabels: false,
                createValues: false,
                reverse: true
            }
        },
        {
            id: "decipher.makeColsWithValuesReverse",
            options: {
                tag: "col",
                createLabels: false,
                createValues: true,
                reverse: true
            }
        },
        {
            id: "decipher.makeChoices",
            options: {
                tag: "choice",
                createLabels: false,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeChoicesWithValues",
            options: {
                tag: "choice",
                createLabels: false,
                createValues: true,
                reverse: false
            }
        },
        {
            id: "decipher.makeChoicesMatchingLabels",
            options: {
                tag: "choice",
                createLabels: true,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeChoicesMatchingValues",
            options: {
                tag: "choice",
                createLabels: true,
                createValues: true,
                reverse: false
            }
        },
        {
            id: "decipher.makeChoicesReverse",
            options: {
                tag: "choice",
                createLabels: false,
                createValues: false,
                reverse: true
            }
        },
        {
            id: "decipher.makeChoicesWithValuesReverse",
            options: {
                tag: "choice",
                createLabels: false,
                createValues: true,
                reverse: true
            }
        },
        {
            id: "decipher.makeCases",
            options: {
                tag: "case",
                createLabels: false,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeCasesMatchingLabels",
            options: {
                tag: "case",
                createLabels: true,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeGroups",
            options: {
                tag: "group",
                createLabels: false,
                createValues: false,
                reverse: false
            }
        },
        {
            id: "decipher.makeGroupsMatchingLabels",
            options: {
                tag: "group",
                createLabels: true,
                createValues: false,
                reverse: false
            }
        },
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
                        const output = makeItems(text, command.options);
                        editBuilder.replace(selection, output);
                    }
                });

            }
        );

        context.subscriptions.push(disposable);
    }
}