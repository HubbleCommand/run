# run 

VSCode extension to run executables directly from the Explorer.

## Features

This extension provides different ways of running files:
- Run in Terminal: Creates a new Terminal, and starts the executable file. On Windows, only allows starting .exe files. There are no file type limitations for other platforms.
- Open External: Opens the file with the preffered external program. If the file is executable, will launch it.

You can run files like this in two different ways:
- From the File Explorer
- In the opened files toolbar

## Examples
You can get access the new options from the menu from the explorer:
![run from explorer](images/run_explorer.gif)

Or from the toolbar of opened files:
![run from toolbar](images/run_toolbar.gif)

After selecting the option, a new terminal will be opened, and your program will start:
![result](images/run_result_2.gif)

It works the same when using the `Open External` option:
![result](images/open_explorer.gif)

Except that no terminal is opened, and the file will be opened in the OS selection for the file:
![result](images/open_result.gif)