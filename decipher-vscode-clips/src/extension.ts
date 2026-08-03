// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { registerMakeRadio } from "./commands/makeRadio";
import { registerMakeCheckbox } from "./commands/makeCheckbox";
import { registerMakeSelect } from "./commands/makeSelect";
import { registerMakeTextarea } from "./commands/makeTextarea";
import { registerMakeText } from "./commands/makeText";
import { registerMakeNumber } from "./commands/makeNumber";
import { registerMakePipe } from "./commands/makePipe";
import { registerItemCommands } from "./commands/makeItems";

export function activate(context: vscode.ExtensionContext) {
	registerMakeRadio(context);
	registerMakeCheckbox(context);
	registerMakeSelect(context);
	registerMakeTextarea(context);
	registerMakeText(context);
	registerMakeNumber(context);
	registerMakePipe(context);
	registerItemCommands(context);
}

export function deactivate() {}
