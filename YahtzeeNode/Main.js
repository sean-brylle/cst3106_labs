import { GameState } from "./models/GameState.js";
import { GameService } from "./services/GameService.js";

export default class YahtzeeGame {
  constructor() {
    this.gameState = new GameState();
    this.gameService = new GameService(this.gameState);
  }

  startNewGame() {
    this.gameState = new GameState();
    this.gameService = new GameService(this.gameState);
    return {
      message: "New game started",
      remainingRolls: this.gameState.chances,
    };
  }

  rollDice() {
    return this.gameService.rollDice();
  }

  holdDice(diceId) {
    return this.gameService.toggleHoldDice(diceId);
  }

  calculateScore(scoreType, number = null) {
    if (scoreType === "upper" && number) {
      return this.gameService.calculateScore(scoreType)(number);
    }
    return this.gameService.calculateScore(scoreType);
  }

  addToTotalScore(score) {
    return this.gameService.updateTotalScore(score);
  }

  getGameState() {
    return {
      dice: this.gameState.dice,
      remainingRolls: this.gameState.chances,
      totalScore: this.gameState.totalScore,
    };
  }
}
