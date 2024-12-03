export class Scoresheet {
  static calculateUpperSection(diceValues, targetNumber) {
    return diceValues
      .filter((value) => value === targetNumber)
      .reduce((sum, value) => sum + value, 0);
  }

  static calculateValueFrequency(diceValues) {
    return diceValues.reduce((counts, value) => {
      counts[value] = (counts[value] || 0) + 1;
      return counts;
    }, {});
  }

  static threeOfAKind(diceValues) {
    const counts = this.calculateValueFrequency(diceValues);
    for (let value in counts) {
      if (counts[value] >= 3) {
        return parseInt(value) * 3;
      }
    }
    return 0;
  }

  static fourOfAKind(diceValues) {
    const counts = this.calculateValueFrequency(diceValues);
    for (let value in counts) {
      if (counts[value] >= 4) {
        return parseInt(value) * 4;
      }
    }
    return 0;
  }

  static fullHouse(diceValues) {
    const counts = this.calculateValueFrequency(diceValues);
    const values = Object.values(counts);
    return values.includes(3) && values.includes(2) ? 25 : 0;
  }

  static yahtzee(diceValues) {
    const counts = this.calculateValueFrequency(diceValues);
    return Object.values(counts).some((count) => count === 5) ? 50 : 0;
  }

  static smallStraight(diceValues) {
    const uniqueValues = [...new Set(diceValues)].sort((a, b) => a - b);
    const isSmallStraight =
      this.checkConsecutive(uniqueValues, [1, 2, 3, 4]) ||
      this.checkConsecutive(uniqueValues, [2, 3, 4, 5]) ||
      this.checkConsecutive(uniqueValues, [3, 4, 5, 6]);
    return isSmallStraight ? 30 : 0;
  }

  static largeStraight(diceValues) {
    const uniqueValues = [...new Set(diceValues)].sort((a, b) => a - b);
    const sequence = uniqueValues.join("");
    return sequence === "12345" || sequence === "23456" ? 40 : 0;
  }

  static checkConsecutive(values, sequence) {
    return sequence.every((num) => values.includes(num));
  }
}
