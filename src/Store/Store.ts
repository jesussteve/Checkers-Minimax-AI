import React from 'react'
import {observable, computed, action } from 'mobx'

interface StoreProps {
    winner: string
    currentPlayer: string
    currentSquare: number
    squares: string[]
    isJumpAvailable: boolean
    isOpponentAi: boolean,
}

export class Store implements StoreProps {
    @observable winner: string = ""
    @observable currentPlayer: string = 'black'
    @observable currentSquare: number = 1
    @observable squares: string[] = []
    @observable isJumpAvailable: boolean = false
    @observable isOpponentAi: boolean = false

	toString(): string {
        // TODO: return string reperesentation of store
        return "NOT IMPLEMENTED"
    }

    @action.bound nextPlayer(): void {
        this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black'
    }

    @action.bound genSquares(): void {
        // TODO: Implement square generation

    }
}

export const gameState = new Store()
