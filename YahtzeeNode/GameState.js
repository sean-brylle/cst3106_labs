export class GameState {
  constructor() {
    this.dice = Array.from({ length: 5 }, (_, i) => new Dice(`dice${i + 1}`));
    this.chances = 3;
    this.totalScore = 0;
  }

  resetRolls() {
    this.chances = 3;
  }

  canRoll() {
    return this.chances > 0;
  }

  decrementRolls() {
    if (this.chances > 0) {
      this.chances--;
    }
    return this.chances;
  }

  getDiceValues() {
    return this.dice.map((die) => die.value);
  }
}
