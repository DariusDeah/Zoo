import { Tiger } from '../app/modules/Tiger.js';


let tony = new Tiger('tony',100,200,100)
export class TigerController{
  constructor() {
    console.log('hello from tiger controller')
    console.log(tony)
}
}