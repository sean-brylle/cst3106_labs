//dice faces
const diceFaces = [
  "Dice/1.png, Dice/2.png, Dice/3.png, Dice/4.png, Dice/5.png, Dice/6.png",
];

//dice hold faces
const diceHoldFaces = [
  "Hold Dice/hold1.png, Hold Dice/hold.png, Hold Dice/hold3.png, Hold Dice/hold4.png, Hold Dice/hold5.png, Hold Dice/hold6.png",
];

const diceLock = [-1, -1, -1, -1, -1];

const allDice = [];

var tmp = 0;
document.querySelector(".roll-left-span").innerHTML = tmp;

function dice() {
  tmp++;
  document.querySelector(".rolls-left span").innerHTML = tmp;
  for (var i = 0; i < 5; i++) {
    allDice[i] = Math.floor(Math.random() * 6) + 1;
  }
  document.querySelector(".roll-btn").disabled = true;
  document.querySelector(".roll-dice").disabled = false;
}

function displayDice(die) {
  for (var i = 0; i < 5; i++)
    document.querySelector(".die-" + (i + 1) + " img").src =
      diceFaces[die[i] - 1];
}

function reRollDice() {
  let copy = [];
  if (tmp <= 3) {
    for (var i = 0; i < 5; i++) {
      console.log(diceLock[i]);
      if (diceLock[i] == -1) copy[i] = Math.floor(Math.random() * 6) + 1;
      else copy[i] = allDice[i];
    }
  }
}

function clear() {
  for (var i = 0; i < 5; i++)
    document.querySelector(".die=" + (i + 1) + "img").src = "empty.png";
  document.querySelector(".roll-btn").disabled = true;
  document.querySelector(".roll-dice").disabled = false;
  tmp = 0;
  document.querySelector(".rolls-left span").innerHTML = tmp;
}

//Game

document.querySelector(".roll-btn").addEventListener("click", () => {
  tmp = 0;
  dice();
  displayDice(fiveDice);
});

document.querySelector("");
