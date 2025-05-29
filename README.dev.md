# run developer documentation

Logo made with Inkscape.

You can download nodejs with [scoop](https://scoop.sh/#/apps?q=nodejs&id=1f571812646c866d9b93b62321aefd3707a6f7ee).

See [here](https://code.visualstudio.com/api/references/extension-manifest#marketplace-presentation-tips) for marketplace presentation tips.

VS Code Extension API documentation:

- [VS Code Extension Guides](https://code.visualstudio.com/api/extension-guides/overview)
- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code Extension API References](https://code.visualstudio.com/api/references/vscode-api)

## Packaging

See [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for more info on publishing.


> Always use the latest `vsce` so `npm install -g @vscode/vsce` to make sure you have it.

Use `vsce package` to package into a `.vsix` extension file.

## Publishing

Possible to run `vsce publish`.

Otherwise, you can grap the packaged `.vsix` file and upload it through the [extension manager page](https://marketplace.visualstudio.com/manage/publishers).

### Excluding files / directories

[Documentation](https://vscode-docs.readthedocs.io/en/stable/tools/vscecli/#vscodeignore)

It is possible to ignore files when building the extension. This is useful to ignore usage reports files.

## Reports

You can export some basic statistics about your extension in the Visual Studio Marketplace admin panel.

Note that you can only get the data for the past 90 days MAX, which is why exported files are saved here.

For generating graphs, go to the end of my post [here](https://hubblecommand.github.io/projects/vsc-ext-run.html) about this very package.
