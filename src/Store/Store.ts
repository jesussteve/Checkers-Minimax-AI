/**
 * @file Mobx Store definition and gameState instance declaration
 */
import { observable, computed, action } from 'mobx'
import Squares, { Row, Column } from '../Models/Squares.Model'

/**
 * Interface
 */
    interface StoreProps {
    winner: string
    currentPlayer: string
    currentSquare: number
    squares: Squares
    isJumpAvailable: boolean
    isOpponentAi: boolean,
    availableMoves: number[]
}

/**
 * Class Definition implementing Interface
 */
export class Store implements StoreProps {
    // Mobx observable Props
    @observable winner = ""
    @observable currentPlayer = 'black'
    @observable currentSquare = 1
    @observable currentRow = 0
    @observable squares = new Squares()
    @observable isJumpAvailable = false
    @observable isOpponentAi = false
    @observable availableMoves = []
    /**
     * Convert store to string
     */
    toString(): string {
        // TODO: return string reperesentation of store
        return "NOT IMPLEMENTED"
    }

    /**
     * @constructor Mobx Store Constructor
     */
    constructor(){
      this.genSquares()
    }

    /**
     * Bound Mobx Action available to observers
     * Changes the current player
     * @returns {void}
     */
    @action.bound
    nextPlayer(): void {
        // Swap player to opposite of current player
        this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black'
        console.log('Changed player to ' + this.currentPlayer.toUpperCase())
    }

    /**
     * Bound Mobx Action available to observers
     * Generates squares for game board for given row / columns
     * @returns {void}
     */
    @action.bound
    genSquares(): void {
        // Current square id
        let id = 0
        console.log('Generating squares..')
        // Loop rows
        for (let i = 0; i < 8; i++) {
            // Current row
            let row = new Row()
            // Loop columns
            for (let j = 0; j < 8; j++) {
                // If col even and row even OR  Id col odd and row odd
                if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                    // Add invalid / white square
                    row.cols.push(new Column(false))
                    console.log('WHITE square added ' + '[' + i + ',' + j + ']')
                    // Id col even and row odd OR Id col odd and row odd
                } else if ((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0)) {
                    // Increment current square id
                    id += 1
                    // Determine if square should have white checker
                    if (id <= 12) {
                        // Add in Valid square with id and white player
                        row.cols.push(new Column(true, id, 'white', false))
                        console.log('BLACK square added (id: ' + id + ') with WHITE checker')
                        // Determine if square should have black checker
                    } else if (id >= 21) {
                        // Add valid square with id and black checker
                        row.cols.push(new Column(true, id, 'black', false))
                        console.log('BLACK Square added (id: ' + id + ') with BLACK checker')
                        // Init empty square
                    } else {
                        // Add valid square with id and no checker
                        row.cols.push(new Column(true, id, undefined, false))
                        console.log('BLACK square added (id: ' + id + ')')
                    }
                }
            }
            // Add row to squares
            this.squares.rows.push(row)
        }

        // Print grid of valid squares
        console.log('Valid squares:')
        // Loop rows array
        this.squares.rows.map((row) => {
            // Print JSON string of current row cols array where items are valid squares
            console.log(JSON.stringify(row.cols.filter(square => square.isValid)))
        })

    }

    /**
     * Bound Mobx Action available to observers
     * OnClick event for checkers on the board
     * @param {number} squareId - Current square of the checker
     * @param {number} rowId - Current row of the checker
     * @param {string} colour - Colour of the checker
     * @param {boolean} isKing - Checker king status
     */
    @action.bound
    checkerOnClick(squareId: number, rowId:number, colour: string, isKing: boolean): void {
        const ai = this.isOpponentAi
        const currentPlayer = this.currentPlayer

        // TODO: Check if current checker belongs to current player
        console.log(colour.toUpperCase() + ' checker clicked on square ' + squareId);
        // Determine if opponents checker and if opponent is human
        if (currentPlayer !== colour && !ai) {
            // Human opponent
            this.calculateMoves(squareId, rowId, colour, isKing)
        } else {
            // Current player
            this.calculateMoves(squareId, rowId, colour, isKing)
            // Determine if winner
        }
    }

    /**
     * Bound Mobx Action available to observers
     * Calculates moves available for a given checker
     * @param {number} squareId - Current square of the checker
     * @param {number} rowId - Current row of the checker
     * @param {string} colour - Colour of the checker
     * @param {boolean} isKing - Checker king status
     */
    @action.bound
    calculateMoves(squareId: number, rowId: number, colour: string, isKing: boolean) : void {
        // Mark checker & row as selected
        this.currentSquare = squareId
        this.currentRow = rowId
        console.log('Calculating moves for square ' + squareId)
        // TODO: Calculate possible moves
        // If king
        if (isKing) {
            // TODO: Include backwards moves for king
            console.log('The checker is a KING!')
        } else {
            // Determine colour
            if (colour === 'white') {
                // Checker position not last row on board
                if(squareId < 29) {
                    // evaluate move for item in next array down (s[r][c] -> t[r+1][c])
                    // If EVEN row AND NOT LAST item in array
                    //if ()
                        // evaluate move for item RHS adjacent to item above (s[r][c] -> t[r+1][c+1])
                    // If ODD row AND NOT FIRST item in array
                        // evaluate move for item RHS adjacent to item above (s[r][c] -> t[r+1][c+1])
                    this.availableMoves = []
                }
            }
        }
        // If not last row
            // evaluate move for item in next array down (s[r][c] -> t[r+1][c])
            // If EVEN row AND NOT LAST item in array
                // evaluate move for item RHS adjacent to item above (s[r][c] -> t[r+1][c+1])
            // If ODD row AND NOT FIRST item in array
                // evaluate move for item RHS adjacent to item above (s[r][c] -> t[r+1][c+1])
            // If Last row
            // King me
        // If black
            // If not first row
        // evaluate move for item in next array up (s[r][c] -> t[r-1][c]) ( could use * -1 )
            // If EVEN row AND NOT LAST item in array
        // evaluate move for item RHS adjacent to item above (s[r][c] -> t[r-1][c-1])
            // If ODD row AND NOT FIRST item in array
                // evaluate move for item RHS adjacent to item above (s[r][c] -> t[r-1][c-1])
        // If first row
            // King me
    }

    /**
     *
     * @param move
     */
    // @action.bound
    // evaluateMove(move) {
    //     // TODO: evaluate move
    //     // check if jump is available
    //     // Set jump flag
    //     this.setState({ jumpAvailable: true })
    //     // Otherwise
    // }

    // determineMoves() {
    //     // If jumps available
    //     // If one jump available
    //     // Force jump
    //     // More jumps
    //     // prompt user to choose jump
    //     // Otherwise
    // }

    // jumpChecker(jumperId, jumpedId, ) {
    //     // while jumpsAvailable
    //     // jump the check
    //     // set no jumps avail
    //     // checkJumps
    // }

    // moveChecker() {

    // }
}