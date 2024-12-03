// Variable to check if dice is currently being held
let onHold = {
  dice1: false,
  dice2: false,
  dice3: false,
  dice4: false,
  dice5: false,
};

// Variable to know the number of chances the player has
let chances = 3;

function startGame() {}

function holdDice(diceID) {
  if (onHold[diceID] == false) {
    let value = document.getElementById(diceID).dataset.value;
    document
      .getElementById(diceID)
      .setAttribute("src", `Hold Dice/hold${value}.png`);
    onHold[diceID] = true;
  } else {
    let value = document.getElementById(diceID).dataset.value;
    document.getElementById(diceID).setAttribute("src", `Dice/${value}.png`);
    onHold[diceID] = false;
  }
}

function rollDice() {
  if (chances <= 0) return;

  let diceValue = [];

  for (let i = 0; i < 5; i++) {
    diceValue.push(Math.floor(Math.random() * 6) + 1);
  }

  for (let i = 0; i < diceValue.length; i++) {
    if (!onHold["dice" + (i + 1)]) {
      document
        .getElementById("dice" + (i + 1))
        .setAttribute("src", `Dice/${diceValue[i]}.png`);

      document.getElementById("dice" + (i + 1)).dataset.value = diceValue[i];
    }
  }

  chances--;
  document.getElementById("rollsLeft").textContent = chances;
}

function calculateUpper(diceNumber) {
  count = 0;
  document.querySelectorAll(".dice").forEach((dice) => {
    if (dice.dataset.value == diceNumber) count++;
  });
  return count * diceNumber;
}

function onClickUpper(event, number) {
  let score = calculateUpper(number);

  event.target.value = score;
}

function threeOfAKindScore(event) {
  const counts = {};
  let dice = document.querySelectorAll(".dice");

  dice.forEach((die) => {
    const value = parseInt(die.dataset.value);
    counts[value] = (counts[value] || 0) + 1;
  });

  let threeOfAKindValue = null;
  for (let value in counts) {
    if (counts[value] >= 3) {
      threeOfAKindValue = parseInt(value);
      break;
    }
  }

  event.target.value = threeOfAKindValue !== null ? threeOfAKindValue * 3 : 0;
}

function fourOfAKindScore(event) {
  const counts = {};
  let dice = document.querySelectorAll(".dice");

  dice.forEach((die) => {
    const value = parseInt(die.dataset.value);
    counts[value] = (counts[value] || 0) + 1;
  });

  let fourOfAKindValue = null;
  for (let value in counts) {
    if (counts[value] >= 4) {
      fourOfAKindValue = parseInt(value);
      break;
    }
  }

  event.target.value = fourOfAKindValue !== null ? fourOfAKindValue * 4 : 0;
}

function fullHouseScore(event) {
  const counts = {};
  let dice = document.querySelectorAll(".dice");

  dice.forEach((die) => {
    const value = parseInt(die.dataset.value);
    counts[value] = (counts[value] || 0) + 1;
  });

  const values = Object.values(counts);
  const hasThreeOfAKind = values.includes(3);
  const hasPair = values.includes(2);

  event.target.value = hasThreeOfAKind && hasPair ? 25 : 0;
}

function yahtzeeScore(event) {
  const counts = {};
  let dice = document.querySelectorAll(".dice");

  dice.forEach((die) => {
    const value = parseInt(die.dataset.value);
    counts[value] = (counts[value] || 0) + 1;
  });

  const isYahtzee = Object.values(counts).some((count) => count === 5);

  event.target.value = isYahtzee ? 50 : 0;
}

function smallStraightScore(event) {
  let dice = Array.from(document.querySelectorAll(".dice")).map((die) =>
    parseInt(die.dataset.value)
  );
  const uniqueValues = [...new Set(dice)].sort((a, b) => a - b);

  const isSmallStraight =
    (uniqueValues.includes(1) &&
      uniqueValues.includes(2) &&
      uniqueValues.includes(3) &&
      uniqueValues.includes(4)) ||
    (uniqueValues.includes(2) &&
      uniqueValues.includes(3) &&
      uniqueValues.includes(4) &&
      uniqueValues.includes(5)) ||
    (uniqueValues.includes(3) &&
      uniqueValues.includes(4) &&
      uniqueValues.includes(5) &&
      uniqueValues.includes(6));

  event.target.value = isSmallStraight ? 30 : 0;
}

function largeStraightScore(event) {
  let dice = Array.from(document.querySelectorAll(".dice")).map((die) =>
    parseInt(die.dataset.value)
  );
  const uniqueValues = [...new Set(dice)].sort((a, b) => a - b);

  const isLargeStraight =
    uniqueValues.join("") === "12345" || uniqueValues.join("") === "23456";

  event.target.value = isLargeStraight ? 40 : 0;
}

function updateTotalScore(score) {
  totalScore += score;
  document.getElementById("totalScore").textContent = totalScore;
}

function totalScore() {
  document.getElementById("totalPoints").textContent = totalScore;
}
