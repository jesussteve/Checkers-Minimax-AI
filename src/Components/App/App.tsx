import React from 'react'
import './App.css'
// import Game from '../Game'
import { observer } from 'mobx-react'
import { gameState, Store } from '../../Store'

const AppProps = {
  gameState: Store
};

const App: React.FunctionComponent<{
  gameState: Store
}> = observer(props => {
  return (
    <div className='App-container'>
      <div className='container'>
      <h1>Hello world!</h1>
      <p>{gameState.currentPlayer}</p>
      <button onClick={gameState.nextPlayer} type='button'>Change Player</button>
      </div>
    </div>
  );
});

export default App
