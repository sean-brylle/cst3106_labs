const { GameState } = require("./GameState.js");
function rollDice() {
  if (GameState.getChances() <= 0) return GameState.getDice(); // If there are no chances return an empty array

  let diceValue = [];

  for (let i = 0; i < 5; i++) {
    diceValue.push(Math.floor(Math.random() * 6) + 1);
  }

  GameState.setChances(GameState.getChances() - 1);
  GameState.setDice(diceValue);
  return GameState.getDice();
}

module.exports = {
  rollDice,
};
