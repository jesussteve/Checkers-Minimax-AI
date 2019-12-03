/**
 * @file App React component
 */
import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import Game from '../Game'
import './App.css'
import { Store } from '../../Store'

/**
 * Props
 */
type AppProps = {
  gameState: Store
}

/**
 * @constructor Observer React Function Component declaration
 * @param {Store} gameState - Observable Mobx store for game state 
 */
const App: FunctionComponent<AppProps> = observer(({ 
  // Prop Defaults
  gameState
}) =>
  <div className='App-container'>
    <Game gameState={gameState}>
      <p>{gameState.currentPlayer}</p>
      <button onClick={gameState.nextPlayer} type='button'>
        Change Player
        </button>
    </Game>
  </div>
)

export default App
