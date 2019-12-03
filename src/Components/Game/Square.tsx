/**
 * @file Square React Component
 */
import React, {FunctionComponent, ReactNode} from 'react'

/**
 * Props
 */
type SquareProps = {
  id?: number
  isValid: boolean
  children?: ReactNode
  isJumpable?: boolean
}

/**
 * @constructor React Component declaration 
 * @param {number|undefined} id - Current id for a valid square (invalid square do not have an id)
 * @param {boolean|undefined} isValid - Is the square a valid position for a checker
 * @param {ReactNode|undefined} children - Child react components
 * @param {boolean|undefined} isJumpable - Can this square be jumped to from the currently selected square?
 */
const Square: FunctionComponent<SquareProps> = ({
  // Prop Defaults
  id, 
  isValid, 
  children,
  isJumpable = false
}) => 
  <div className={`Square ${isValid ? "Square-black" : "Square-white"}`} > 
    {children}
  </div>

export default Square;
