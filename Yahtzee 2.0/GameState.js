class GameState {
  // Constructor to initialize the game state with an array of 5 dice and 3 chances to roll
  static dice = [0, 0, 0, 0, 0];
  static chances = 3;
  static totalScore = 0;
  static onHold = {
    dice1: false,
    dice2: false,
    dice3: false,
    dice4: false,
    dice5: false,
  };

  static setChances(chances) {
    this.chances = chances;
  }

  static getChances() {
    return this.chances;
  }

  static setDice(dice) {
    for (let i = 0; i < this.dice.length; i++) {
      if (!this.onHold[`dice${i + 1}`]) {
        this.dice[i] = dice[i];
      }
    }
  }

  static getDice() {
    return this.dice;
  }

  static toggleDice(dicePosition) {
    this.onHold[`dice${dicePosition}`] = !this.onHold[`dice${dicePosition}`];
    return this.onHold;
  }

  static newGame() {
    this.dice = [0, 0, 0, 0, 0];
    this.chances = 3;
    this.totalScore = 0;
    this.onHold = {
      dice1: false,
      dice2: false,
      dice3: false,
      dice4: false,
      dice5: false,
    };
  }
}

module.exports = {
  GameState,
};
