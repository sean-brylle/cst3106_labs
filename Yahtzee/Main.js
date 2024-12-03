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

async function holdDice(diceID) {
  const dicePosition = diceID.slice(4);
  const response = await fetch(
    `http://localhost:3000/toggleDice?dicePosition=${dicePosition}`
  );
  const data = await response.json();
  const onHold = data.onHold;
  if (onHold[diceID] == true) {
    let value = document.getElementById(diceID).dataset.value;
    document
      .getElementById(diceID)
      .setAttribute("src", `Hold Dice/hold${value}.png`);
  } else {
    let value = document.getElementById(diceID).dataset.value;
    document.getElementById(diceID).setAttribute("src", `Dice/${value}.png`);
  }
}

async function rollDice() {
  const response = await fetch("http://localhost:3000/rollDice");
  const data = await response.json();
  const diceValue = data.diceValue;
  // if (chances <= 0) return;

  // let diceValue = [];

  // for (let i = 0; i < 5; i++) {
  //   diceValue.push(Math.floor(Math.random() * 6) + 1);
  // }

  const holdStatus = await fetch("http://localhost:3000/holdStatus");
  const holdStatusData = await holdStatus.json();
  const onHold = holdStatusData.onHold;

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

async function calculateUpper(diceNumber) {
  const types = {
    1: "ones",
    2: "twos",
    3: "threes",
    4: "fours",
    5: "fives",
    6: "sixes",
  };

  const res = await fetch(
    `http://localhost:3000/score?type=${types[diceNumber]}`
  );
  const data = await res.json();

  return data.score;
}

async function onClickUpper(event, number) {
  let score = await calculateUpper(number);

  event.target.value = score;
}

async function threeOfAKindScore(event) {
  const res = await fetch(`http://localhost:3000/score?type=threeOfAKindScore`);
  const data = await res.json();
  event.target.value = data.score;
  // const counts = {};
  // let dice = document.querySelectorAll(".dice");

  // dice.forEach((die) => {
  //   const value = parseInt(die.dataset.value);
  //   counts[value] = (counts[value] || 0) + 1;
  // });

  // let threeOfAKindValue = null;
  // for (let value in counts) {
  //   if (counts[value] >= 3) {
  //     threeOfAKindValue = parseInt(value);
  //     break;
  //   }
  // }

  // event.target.value = threeOfAKindValue !== null ? threeOfAKindValue * 3 : 0;
}

async function fourOfAKindScore(event) {
  const res = await fetch(`http://localhost:3000/score?type=fourOfAKindScore`);
  const data = await res.json();
  event.target.value = data.score;
  // const counts = {};
  // let dice = document.querySelectorAll(".dice");

  // dice.forEach((die) => {
  //   const value = parseInt(die.dataset.value);
  //   counts[value] = (counts[value] || 0) + 1;
  // });

  // let fourOfAKindValue = null;
  // for (let value in counts) {
  //   if (counts[value] >= 4) {
  //     fourOfAKindValue = parseInt(value);
  //     break;
  //   }
  // }

  // event.target.value = fourOfAKindValue !== null ? fourOfAKindValue * 4 : 0;
}

async function fullHouseScore(event) {
  const res = await fetch(`http://localhost:3000/score?type=fullHouseScore`);
  const data = await res.json();
  event.target.value = data.score;

  // const counts = {};
  // let dice = document.querySelectorAll(".dice");

  // dice.forEach((die) => {
  //   const value = parseInt(die.dataset.value);
  //   counts[value] = (counts[value] || 0) + 1;
  // });

  // const values = Object.values(counts);
  // const hasThreeOfAKind = values.includes(3);
  // const hasPair = values.includes(2);

  // event.target.value = hasThreeOfAKind && hasPair ? 25 : 0;
}

async function yahtzeeScore(event) {
  const res = await fetch(`http://localhost:3000/score?type=fullHouseScore`);
  const data = await res.json();
  event.target.value = data.score;

  // const counts = {};
  // let dice = document.querySelectorAll(".dice");

  // dice.forEach((die) => {
  //   const value = parseInt(die.dataset.value);
  //   counts[value] = (counts[value] || 0) + 1;
  // });

  // const isYahtzee = Object.values(counts).some((count) => count === 5);

  // event.target.value = isYahtzee ? 50 : 0;
}

async function smallStraightScore(event) {
  const res = await fetch(
    `http://localhost:3000/score?type=smallStraightScore`
  );
  const data = await res.json();
  event.target.value = data.score;
  // let dice = Array.from(document.querySelectorAll(".dice")).map((die) =>
  //   parseInt(die.dataset.value)
  // );
  // const uniqueValues = [...new Set(dice)].sort((a, b) => a - b);

  // const isSmallStraight =
  //   (uniqueValues.includes(1) &&
  //     uniqueValues.includes(2) &&
  //     uniqueValues.includes(3) &&
  //     uniqueValues.includes(4)) ||
  //   (uniqueValues.includes(2) &&
  //     uniqueValues.includes(3) &&
  //     uniqueValues.includes(4) &&
  //     uniqueValues.includes(5)) ||
  //   (uniqueValues.includes(3) &&
  //     uniqueValues.includes(4) &&
  //     uniqueValues.includes(5) &&
  //     uniqueValues.includes(6));

  // event.target.value = isSmallStraight ? 30 : 0;
}

async function largeStraightScore(event) {
  const res = await fetch(
    `http://localhost:3000/score?type=largeStraightScore`
  );
  const data = await res.json();
  event.target.value = data.score;

  // let dice = Array.from(document.querySelectorAll(".dice")).map((die) =>
  //   parseInt(die.dataset.value)
  // );
  // const uniqueValues = [...new Set(dice)].sort((a, b) => a - b);

  // const isLargeStraight =
  //   uniqueValues.join("") === "12345" || uniqueValues.join("") === "23456";

  // event.target.value = isLargeStraight ? 40 : 0;
}

async function newGame() {
  const game = await fetch("http://localhost:3000/newGame");
  resetDice();
}

function resetDice() {
  document.querySelectorAll(".dice").forEach((die) => {
    die.setAttribute("src", "./empty.png");
    die.dataset.value = "";
  });
}

function updateTotalScore(score) {
  totalScore += score;
  document.getElementById("totalScore").textContent = totalScore;
}

function totalScore() {
  document.getElementById("totalPoints").textContent = totalScore;
}
