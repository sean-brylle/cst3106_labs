class YatzheeEngine {
  constructor() {
    this.scoreSheet = {
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      pair: 0,
      twoPairs: 0,
      threeOfAKind: 0,
      fourOfAKind: 0,
      smallStraight: 0,
      largeStraight: 0,
      fullHouse: 0,
      chance: 0,
      yatzhee: 0,
    };
  }

  calculateScore(diceValues) {
    this.calculateUpperSection(diceValues);
    this.calculateLowerSection(diceValues);
  }

  calculateUpperSection(diceValues) {
    for (let i = 1; i <= 6; i++) {
      this.scoreSheet[Object.keys(this.scoreSheet)[i - 1]] = diceValues
        .filter((value) => value === i)
        .reduce((sum, value) => sum + value, 0);
    }
  }

  calculateLowerSection(diceValues) {}

  getScoreSheet() {
    return this.scoreSheet;
  }
}
