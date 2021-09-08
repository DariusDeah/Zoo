export class Tiger{
  constructor(name, attack, defend, health,img) {
    this.name = name;
    this.attack = attack;
    this.defend = defend;
    this.health = health;
    this.img = img;
  }
  getOverall() {
    this.attack / this.defend
  }
 
}




