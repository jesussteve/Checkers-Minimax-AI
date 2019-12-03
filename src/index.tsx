/**
 * @file Entry point to application
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { Store } from './Store'

// Init Mobx Store to handle application state
const store = new Store()

// Render App component on index.html root
ReactDOM.render(<App gameState={store}/>, document.getElementById('root'))

// Application loaded
console.log('Hello World!')
