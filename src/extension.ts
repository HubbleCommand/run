import * as vscode from 'vscode';
import * as path from 'path';

function buildStartCommand(fspath: string): string {
	const config = vscode.workspace.getConfiguration('run');
	const fsMappings = config.get<Record<string, string>>('fsMappings') || {};
	const extension = path.extname(fspath);
	console.log(fspath)
	if (extension in fsMappings) {
		return fsMappings[extension].replace('$0', fspath);
	}

	var command: string = fspath;
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
