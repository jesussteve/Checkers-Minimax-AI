import React from "react";
import ReactDOM from 'react-dom'
import App from './Components/App'
import { gameState, Store } from "./Store";

ReactDOM.render(<App gameState={gameState} />, document.getElementById("root"));

console.log("Hello World!")
