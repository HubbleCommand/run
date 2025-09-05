import * as vscode from 'vscode';
import * as path from 'path';

function buildStartCommand(fspath: string): string {
	const config = vscode.workspace.getConfiguration('run');
	const ftMappings = config.get<Record<string, string>>('FiletypeMappings') || {};
	const autoWrap = config.get<boolean>('AutoWrapSpacedPaths') || false;

	const wrappedFs = autoWrap && fspath.includes(' ') ? "\"" + fspath + "\"" : fspath;
	const extension = path.extname(fspath);
	if (extension in ftMappings) {
		return ftMappings[extension].replace('$0', wrappedFs);
	}
	const basename = path.basename(fspath);
	if (basename in ftMappings) {
		return ftMappings[basename].replace('$0', wrappedFs);
	}

	var command: string = wrappedFs;
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

	let disposableTerminal = vscode.commands.registerCommand('run.run', (file: vscode.Uri) => {
		if (file.scheme !== "file") {
			vscode.window.showWarningMessage('Not a file, so not running');
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
