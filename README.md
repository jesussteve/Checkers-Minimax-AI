# Checkers Minimax AI 

## Overview

Checkers game with an AI opponent implementing Minimax algorithm with Alpha-beta pruning.

![Game screenshot](./screenshot.png)

## Languages and Frameworks

- [Node.js](https://nodejs.org) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager
- [React](https://reactjs.org/) - User Interface library
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript 
- [babel](https://babeljs.io) - code transpiling to ensure legacy browser compatability for cutting-edge Javascript features:
    - [Class Decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) 
    - [Class Properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) 
- [Webpack](https://webpack.js.org) - Code bundler and minifier

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. Download and install [Node.js and npm](https://nodejs.org/en/) and check installed:

    ```~sh
    node -v
    npm -v
    ```
2. Install latest **npm**:

    ```~sh
    npm install npm@latest -g
    ```
3. Clone the game:

    ```~sh
    git clone https://github.com/jesussteve/checkers-minimax-ai.git checkers-minimax-ai
    ```

3. Install dependencies:

    ```~sh
    cd checkers-minimax-ai
    npm install 
    ```

### Quickstart

TBC

## Building

Instruction to build releases of the application

### Build with Webpack

```
npm run build
```

### Build with Webpack (Production optimised)

```
npm run build:prod
```

### Build with Webpack (Development optimised)

```
npm run build:dev
```

## Testing

How to test the application.

### TypeScript 

Check TypeScript syntax using TypeScript compiler

```
npm run check-types
```

## Run

How to run the application.

### Run locally with Webpack

Run locally using Webpack development server:

```
npm run start
```

## Debug

How to debug the application.

### Debug with Webpack

- Run local development server:

    ```
    npm run dev:webpack
    ```

### Debug with Visual Studio Code

- Download and install [Visual Studio Chrome Debugger](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome):

- Run local development server:

    ```
    npm run dev:vscode
    ```

- Open [Visual Studio Code](https://code.visualstudio.com/Download)

- Press the play button or F5 to start connect to the local development server

For more details see the [launch.json](./.vscode/launch.json) file
