class Dice {
  constructor(numDice) {
    this.numDice = numDice;
    this.diceValues = [];
  }

  rollDice() {
    this.diceValues = Array.from(
      { length: this.numDice },
      () => Math.floor(Math.random() * 6) + 1
    );
  }

  reRollDice(indices) {
    for (const index of indices) {
      this.diceValues[index] = Math.floor(Math.random() * 6) + 1;
    }
  }

  getDiceValues() {
    return this.diceValues;
  }
}

export default Dice;
