//Imports
const { rollDice } = require("./Dice.js");
const { GameState } = require("./GameState.js");
const Scoresheet = require("./Scoresheet.js");

const express = require("express");
const app = express();
const port = 3000;

//roll Dice
app.get("/rollDice/", (req, res) => {
  let diceValue = rollDice();

  res.header("Access-Control-Allow-Origin", "*");
  res.json({ diceValue: diceValue });
});

//toggle dice
app.get("/toggleDice/", (req, res) => {
  let dicePosition = req.query.dicePosition;

  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    onHold: GameState.toggleDice(dicePosition),
  });
});

app.get("/score/", (req, res) => {
  let scoreType = req.query.type;

  res.header("Access-Control-Allow-Origin", "*");
  switch (scoreType) {
    case "ones":
      res.json({ score: Scoresheet.calculateUpper(1) });
      break;
    case "twos":
      res.json({ score: Scoresheet.calculateUpper(2) });
      break;
    case "threes":
      res.json({ score: Scoresheet.calculateUpper(3) });
      break;
    case "fours":
      res.json({ score: Scoresheet.calculateUpper(4) });
      break;
    case "fives":
      res.json({ score: Scoresheet.calculateUpper(5) });
      break;
    case "sixes":
      res.json({ score: Scoresheet.calculateUpper(6) });
      break;
    case "threeOfAKind":
      res.json({ score: Scoresheet.threeOfAKindScore() });
      break;
    case "fourOfAKind":
      res.json({ score: Scoresheet.fourOfAKindScore() });
      break;
    case "fullHouse":
      res.json({ score: Scoresheet.fullHouseScore() });
      break;
    case "smallStraight":
      res.json({ score: Scoresheet.smallStraightScore() });
      break;
    case "largeStraight":
      res.json({ score: Scoresheet.largeStraightScore() });
      break;
    case "yahtzee":
      res.json({ score: Scoresheet.yahtzeeScore() });
      break;
    default:
      res.json({ error: "Invalid score type" });
  }
});

app.get("/holdStatus/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    onHold: GameState.onHold,
  });
});

app.get("/newGame/", (req, res) => {
  GameState.newGame();
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ message: "New game started" });
});

app.get("/calculateUpperSection/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
