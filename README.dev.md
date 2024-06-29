# run developer documentation

Logo made with Inkscape.

You can download nodejs with [scoop](https://scoop.sh/#/apps?q=nodejs&id=1f571812646c866d9b93b62321aefd3707a6f7ee).

See [here](https://code.visualstudio.com/api/references/extension-manifest#marketplace-presentation-tips) for marketplace presentation tips.

## Packaging
See [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for more info on publishing.


> Always use the latest `vsce` so `npm install -g @vscode/vsce` to make sure you have it.

Use `vsce package` to package into a `.vsix` extension file.

## Publishing

Possible to run `vsce publish`.

Otherwise, you can grap the packaged `.vsix` file and upload it through the [extension manager page](https://marketplace.visualstudio.com/manage/publishers).

