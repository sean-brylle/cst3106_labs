import { Dice } from "dice.js";
export class Dice {
  constructor(id) {
    this.id = id;
    this.value = 1;
    this.isHeld = false;
  }

  roll() {
    if (!this.isHeld) {
      this.value = Math.floor(Math.random() * 6) + 1;
    }
    return this.value;
  }

  toggleHold() {
    this.isHeld = !this.isHeld;
    return this.isHeld;
  }
}
