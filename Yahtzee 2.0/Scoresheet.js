const { GameState } = require("./GameState");
function calculateUpper(diceNumber) {
  count = 0;
  GameState.getDice().forEach((dice) => {
    if (dice == diceNumber) count++;
  });
  return count * diceNumber;
}

function threeOfAKindScore() {
  const counts = {};
  let dice = GameState.getDice();

  dice.forEach((die) => {
    const value = parseInt(die);
    counts[value] = (counts[value] || 0) + 1;
  });

  let threeOfAKindValue = null;
  for (let value in counts) {
    if (counts[value] >= 3) {
      threeOfAKindValue = parseInt(value);
      break;
    }
  }

  return threeOfAKindValue !== null ? threeOfAKindValue * 3 : 0;
}

function fourOfAKindScore() {
  const counts = {};
  let dice = GameState.getDice();

  dice.forEach((die) => {
    const value = parseInt(die);
    counts[value] = (counts[value] || 0) + 1;
  });

  let fourOfAKindValue = null;
  for (let value in counts) {
    if (counts[value] >= 4) {
      fourOfAKindValue = parseInt(value);
      break;
    }
  }

  return fourOfAKindValue !== null ? fourOfAKindValue * 4 : 0;
}

function fullHouseScore() {
  const counts = {};
  let dice = GameState.getDice();

  dice.forEach((die) => {
    const value = parseInt(die.dataset.value);
    counts[value] = (counts[value] || 0) + 1;
  });

  const values = Object.values(counts);
  const hasThreeOfAKind = values.includes(3);
  const hasPair = values.includes(2);

  return hasThreeOfAKind && hasPair ? 25 : 0;
}

function yahtzeeScore() {
  const counts = {};
  let dice = GameState.getDice();

  dice.forEach((die) => {
    const value = parseInt(die.dataset.value);
    counts[value] = (counts[value] || 0) + 1;
  });

  const isYahtzee = Object.values(counts).some((count) => count === 5);

  return isYahtzee ? 50 : 0;
}

function smallStraightScore() {
  const uniqueValues = GameState.getDice().slice().sort((a, b) => a - b);

  const smallStraightPatterns = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];

  return smallStraightPatterns.some((pattern) =>
    pattern.every((num) => uniqueValues.includes(num))
  )
    ? 30
    : 0;
}

function largeStraightScore(diceValues) {
  const uniqueValues = GameState.getDice().slice().sort((a, b) => a - b);

  const largeStraightPatterns = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
  ];

  return largeStraightPatterns.some(
    (pattern) => pattern.join("") === uniqueValues.join("")
  )
    ? 40
    : 0;
}

module.exports = {
  calculateUpper,
  threeOfAKindScore,
  fourOfAKindScore,
  fullHouseScore,
  yahtzeeScore,
  smallStraightScore,
  largeStraightScore,
};
