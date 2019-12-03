
/**
 * @file Board Squares Model TypeScript Class 
 */

/**
 * @class Squares class
 * @property {Array<Column>} rows - Array of rows for each row of squares on the game board
 */
export default class Squares {
    rows: Array<Row> = []
}

/**
 * @class Row class
 * @property {Array<Column>} cols - Array of columns of legal squares for a given row on the game board
 */
export class Row {
    cols: Array<Column> = []
}

/**
 * @class Column class
 * @property {boolean} isValid -  Is the square a valid position for a checker
 * @property {number} id - Current id for column
 * @property {string|undefined} player - Player ('black'|'white') for checker in column 
 * @property {boolean} isKing - Flag for checker king status
 */
export class Column {
    isValid: boolean
    id: number
    player?: string
    isKing?: boolean = false

    /**
     * @constructor Constructor to set column state
     * @param {boolean} isValid -  Is the square a valid position for a checker
     * @param {number} id - Current id for column
     * @param {string|undefined} player - Player ('black'|'white') for checker in column 
     * @param {boolean} isKing - Flag for checker king status
     */
    constructor(isValid: boolean, id: number, player?: string, isKing?: boolean) {
        this.isValid = isValid
        this.id = id
        this.player = player
        this.isKing = isKing
    }
}
