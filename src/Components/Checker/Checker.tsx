/**
 * @file Checker React component
 */
import React, { FunctionComponent } from 'react'
import './Checker.css'

/**
 * Props
 */
type CheckerProps = {
    onClick: (squareId: number, player: string, isKing: boolean) => void
    currentSquare: number
    player: string
    isKing?: boolean
    squareId?: number
}
/**
 * @constructor React Function Component Declaration
 * @param {object} onClick - onClick Event when checker is selected
 * @param {number} currentSquare - The currently selected square on the board
 * @param {string} player - The current player ('black'|'white')
 * @param {boolean} isKing - Flag for checker king status
 * @param {number} squareId - The current square for the checker
 */
export const Checker: FunctionComponent<CheckerProps> = ({
    // Prop Defaults
    onClick,
    currentSquare,
    player,
    isKing = false,
    squareId = -1
}) =>
    // Render Component
    <div onClick={() => onClick(squareId, player, isKing)}
        className={` Checker 
                    ${player === 'white' ? "Checker-white" : "Checker-black"}
                    ${squareId === currentSquare ? 'Square-selected' : ''}
                    ${isKing ? 'Square-king' : ''} 
                    `}>
    </div>

export default Checker