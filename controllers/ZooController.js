// divimport { Anaconda } from "../app/modules/Anaconda.js";
import { Bear } from "../app/modules/Bear.js"
import { Tiger } from "../app/modules/Tiger.js";
import {Anaconda} from "../app/modules/Anaconda.js"

let yogi = new Bear('yogi', 70, 200, 100,'https://www.campjellystone.com/wp-content/uploads/2020/11/fpo-yogi-character.png');
let papaBear = new Bear('Papa Bear', 200, 200, 100,'https://www.pinclipart.com/picdir/middle/26-262575_happy-bear-vector-cartoon-character-bear-cartoon-characters.png'
);

let amy = new Anaconda('Amy', 100, 200, 100);
let ashura = new Anaconda('Ashura', 300, 200, 100,'https://www.clipartmax.com/png/middle/245-2450995_anaconda-by-ejds-anaconda-by-ejds-cartoon.png');

let tiggy = new Tiger('Tiggy', 50, 100, 100);
let shakhan = new Tiger('Shakhan', 300, 100, 100);


let anamials = [yogi,papaBear,amy,ashura,tiggy,shakhan]



 
export class ZooController{
  drawAnimals() {
    let template = '';
    anamials.forEach(addAnimals => template += /*html*/`
    <div class="row">
     <h1>${addAnimals.name}</h1>
     <h3> ATTACK : ${addAnimals.attack}</h3>
     <h3> DEFENSE : ${addAnimals.defend}</h3>
     <h3> OVERALL : ${addAnimals.getOverall()}</h3>
     <img src=${addAnimals.img}>
     </div>`)
    {
      document.getElementById('tabElem').innerHTML = template
    }
  }
}