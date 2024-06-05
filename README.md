# run 

[ext-url]: https://marketplace.visualstudio.com/items?itemName=hcommand.run-runner
[![Ratings Badge](https://img.shields.io/vscode-marketplace/v/hcommand.run-runner.svg)][ext-url]
[![Downloads Badge](https://img.shields.io/vscode-marketplace/d/hcommand.run-runner.svg)][ext-url]
[![Ratings Badge](https://img.shields.io/vscode-marketplace/r/hcommand.run-runner.svg)][ext-url]
[![License Badge](https://img.shields.io/github/license/hubblecommand/run.svg?color=blue)](https://github.com/hubblecommand/run/blob/master/LICENSE)

VSCode extension to run executables directly from the Explorer.

## Features

This extension provides different ways of running files:
- Run in Terminal: Creates a new Terminal, and starts the executable file. On Windows, only allows starting .exe files. There are no file type limitations for other platforms.
- Open External: Opens the file with the preffered external program. If the file is executable, will launch it.

You can run files like this in two different ways:
- From the File Explorer
- In the opened files toolbar

## Examples
You can access the new options from the explorer right-click menu:
![run from explorer](images/run_explorer.png)

Or from the toolbar of opened files:
![run from toolbar](images/run_toolbar.png)

After selecting the `Run in Terminal` option, a new terminal will be opened, and your program will start:
![result](images/run_result_2.png)

The `Open External` option is avaiable for all file types on all OSs. It allows you to open the selected file in a seperate app:
![result](images/open_explorer.png)

The file will be opened in the OS's preffered app for the file, and if no app is selected, you will be promted to select one (if it's runnable or an app itself, it will launch):

![result](images/open_result.png)