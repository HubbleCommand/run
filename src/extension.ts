import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposableOpen = vscode.commands.registerCommand('run.open', (file) => {
		vscode.env.openExternal(vscode.Uri.file(file.fsPath));
	});
	
	context.subscriptions.push(disposableOpen);
}

export function deactivate() {}
