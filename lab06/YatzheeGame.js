class YahtzeeGame {
  constructor(numPlayers) {
    this.numPlayers = numPlayers;
    this.players = [];
    for (let i = 0; i < numPlayers; i++) {
      this.players.push(new Player(`Player ${i + 1}`));
    }
    this.currentPlayerIndex = 0;
  }

  playRound() {
    const currentPlayer = this.players[this.currentPlayerIndex];
    console.log(`${currentPlayer.name}'s turn.`);

    // Roll dice
    currentPlayer.rollDice();
    console.log(`Rolled: ${currentPlayer.dice}`);

    // Allow player to re-roll
    currentPlayer.reRoll();
    console.log(`Rerolled: ${currentPlayer.dice}`);

    // Score the round
    currentPlayer.calculateScore();
    console.log(`Score: ${currentPlayer.score}`);

    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.numPlayers;
  }

  playGame() {
    while (true) {
      this.playRound();
      if (this.checkGameOver()) {
        break;
      }
    }
  }

  checkGameOver() {
    return false;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.dice = [];
    this.score = 0;
  }

  rollDice() {
    this.dice = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 6) + 1
    );
  }

  reRoll() {}

  calculateScore() {
    this.score = this.dice.reduce((sum, die) => sum + die, 0);
  }
}
