# run 

[ext-url]: https://marketplace.visualstudio.com/items?itemName=hcommand.run-runner
[![Ratings Badge](https://img.shields.io/vscode-marketplace/v/hcommand.run-runner.svg)][ext-url]
[![Installs Badge](https://img.shields.io/vscode-marketplace/i/hcommand.run-runner.svg)][ext-url]
[![Downloads Badge](https://img.shields.io/vscode-marketplace/d/hcommand.run-runner.svg)][ext-url]
[![Ratings Badge](https://img.shields.io/vscode-marketplace/r/hcommand.run-runner.svg)][ext-url]
[![License Badge](https://img.shields.io/github/license/hubblecommand/run.svg?color=blue)](https://github.com/hubblecommand/run/blob/master/LICENSE)

VSCode extension to run executables directly from the Explorer.

## Features

This extension provides different ways of running files:
- Run in Terminal: Creates a new Terminal, and runs the file.
- Open External: Opens the file with the preffered external program. If the file is executable, will launch it.

You can run files like this in two different ways:
- From the File Explorer
- In the opened files toolbar

## Settings

There is one setting that allows you to change the command that is executed for specific file types, or specific files.
These can be changed in `run - command mapping` id `run.FiletypeMappings`

For file types, this is useful if you need them to be executed with something in particular, i.e.:

	'.sh': 'sh $0'

For specific files, this can also be useful for setting arguments:

	'bat.bat': 'start $0 -arg'

The value `$0` will be replaced by the file path.

## Examples
You can access the new options from the explorer right-click menu:
![run from explorer](images/run_explorer.png)

Or from the toolbar of opened files:
![run from toolbar](images/run_toolbar.png)

After selecting the `Run in Terminal` option, a new terminal will be opened, and your program will start:
![result](images/run_result_2.png)

The `Open External` option is available for all file types on all OSs. It allows you to open the selected file in a seperate app:
![result](images/open_explorer.png)

The file will be opened in the OS's preffered app for the file (possibly VSCode), and if no app is selected, you will be promted to select one (if it's runnable or an app itself, it will launch):

![result](images/open_result.png)
