/**
 * @file Game React Component
 */
import React, { FunctionComponent, ReactNode } from 'react'
import Square from './Square'
import Checker from '../Checker'
import { Store } from '../../Store'
import './Game.css'
import { observer } from 'mobx-react-lite'

/**
 * Props
 */
type GameProps = {
    gameState: Store,
    children: ReactNode
}

/**
 * @constructor Observer React Function Component Declaration
 * @param {Store} gameState - Observable Mobx store for game state 
 * @param {children} children - Child React Components
 */
export const Game: FunctionComponent<GameProps> = observer(({ gameState, children }) =>
    // Render Game Board
    <div className="Game">
        <div className="Board">
            {gameState.squares.rows.map((row, rowIndex) => {
                // Loop rows
                return (
                    <div key={rowIndex}>
                        {row.cols.map((col, colIndex) => {
                            // Loop cols and render square
                            return (
                                <Square
                                    key={colIndex}
                                    isValid={col.isValid}
                                    id={col.isValid ? col.id : undefined}
                                >
                                    {
                                        // If player show checker otherwise ''
                                        col.player ?
                                            // Load checker passing 
                                            <Checker
                                                onClick={gameState.checkerOnClick}
                                                currentSquare={gameState.currentSquare}
                                                player={col.player}
                                                isKing={false}
                                                squareId={col.id}
                                            />
                                            : ''}
                                </Square>
                            )
                        })}
                    </div>
                )
            })}
        </div>
        <p>Current Player: {gameState.currentPlayer}</p>
        {children}
    </div>
)
export default Game;