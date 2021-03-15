# VS Code Extension - Command Palette When Context

## Description

The following is an example extension used to test the `commandPalette` menu contribution point
with different `when` contexts.

## Commands:

- `hello world (true)`: context set to `true`.
- `hello world (false)`: context set to `false`.
- `hello world (dynamic)`: context set to dynamic based on `editorHasSelection`.
- `hello world (undefined`): context is `undefined`.
