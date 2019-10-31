import {observable, computed, action } from 'mobx'


class Store {
    @observable winner = null
    @observable currentPlayer = "black"
    @observable currentSquare = 1
    @observable squares = []
    @observable isJumpAvailable = false
    @observable isOpponentAi
    
    // winner = null
    // currentPlayer = "black"
    // currentSquare = 1
    // squares = []
    // isJumpAvailable = false
    // isOpponentAi = false

    constructor() {
        
    }

	@computed get toString() {
        return 2 * this.currentSquare
    }

    @action.bound get genSquares(){
        // TODO: Implement square generation
    }
}

const gameStore = new Store()

export default gameStore