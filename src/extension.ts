import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];

    disposables.push(vscode.commands.registerCommand('test.helloWorld.true', () => {
        vscode.window.showInformationMessage('hello world true');
    }));
    disposables.push(vscode.commands.registerCommand('test.helloWorld.false', () => {
        vscode.window.showInformationMessage('hello world false');
    }));
    disposables.push(vscode.commands.registerCommand('test.helloWorld.dynamic', () => {
        vscode.window.showInformationMessage('hello world dynamic');
    }));
    disposables.push(vscode.commands.registerCommand('test.helloWorld.undefined', () => {
        vscode.window.showInformationMessage('hello world undefined');
    }));

    context.subscriptions.push(...disposables);
}

export function deactivate() { }
