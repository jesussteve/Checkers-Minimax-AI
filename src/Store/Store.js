import {observable, computed, action } from 'mobx'


class Store {
    @observable winner = null
    @observable currentPlayer = "black"
    @observable currentSquare = 1
    @observable squares = []
    @observable isJumpAvailable = false
    @observable isOpponentAi

    constructor() {
        
    }

	@computed get toString() {
        // TODO: return string reperesentation of store
    }

    @action.bound genSquares(){
        // TODO: Implement square generation
    }
}

const gameState = new Store()

export default gameState