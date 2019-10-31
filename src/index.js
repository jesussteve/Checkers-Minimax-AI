import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import gameState from './Store'

let App = (props) => {
    return (
        <div>
            <h1>Hello world!</h1>
            <p>{JSON.stringify(props.gameState.genSquares())}</p>
        </div>
    )
}

ReactDOM.render(
    <App gameState={gameState} />,
    document.getElementById("root")
);

console.log("Hello World!")