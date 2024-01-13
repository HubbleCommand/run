import * as vscode from 'vscode';

function buildStartCommand(path: string): string {
	var command: string = path;
	if (process.platform === 'win32') {
		command = "start " + command;
	}
	return command;
}

export function activate(context: vscode.ExtensionContext) {

	let disposableOpen = vscode.commands.registerCommand('run.open', (file) => {
		vscode.env.openExternal(vscode.Uri.file(file.fsPath));
	});
	
	context.subscriptions.push(disposableOpen);

	let disposableTerminal = vscode.commands.registerCommand('run.run', (file) => {
		if (file.scheme !== "file") {
			console.log("Not a file, quitting");
			return;
		}

		let terminal = vscode.window.createTerminal({
			name: "Run from Terminal",
			//cwd: cwd,
			hideFromUser: false,
			//shellPath: script,
			//shellArgs: args,
		});
		terminal.sendText(buildStartCommand(file.fsPath), true);
		terminal.show();
	});
	
	context.subscriptions.push(disposableTerminal);
}

export function deactivate() {}
