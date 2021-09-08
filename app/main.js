import { AnacondaController } from "../controllers/AnacondaController.js"
import { BearController } from "../controllers/BearController.js"
import { TigerController } from "../controllers/TigerController.js"
import { ZooController } from "../controllers/ZooController.js"



let tigerController = new TigerController()
let bearController = new BearController()
let anacondacontroller = new AnacondaController()
let zooController = new ZooController()

window['app'] = {
  controllers:{
    tigerController,
    bearController,
    anacondacontroller,
    zooController
    
    
  }
}