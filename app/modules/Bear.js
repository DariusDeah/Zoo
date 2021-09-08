export class Bear{
    constructor(name, attack, defend, health,img) {
    this.name = name;
    this.attack = attack;
    this.defend = defend;
      this.health = health;
      this.img = img
  }
  getOverall() {
    this.attack / this.defend
  }
  randomStats() {
     return Math.floor(Math.random() * 100) + 20
  }
}

