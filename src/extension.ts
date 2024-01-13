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

	let disposableRun = vscode.commands.registerCommand('run.run', (file) => {
		if (file.scheme !== "file") {
			console.log("Not a file, quitting");
			return;
		}
		
		const cp = require('child_process');
		cp.exec(buildStartCommand(file.fsPath), (err :Error, stdout :string|Buffer, stderr :string|Buffer) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (err) {
				console.log('error: ' + err);
			}
		});
	});

	context.subscriptions.push(disposableRun);
}

export function deactivate() {}
