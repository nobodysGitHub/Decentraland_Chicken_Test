import { createTest } from "./scenes/test";
import { boxBuilder } from "./Grid/boxBuilder";
import { chickenCreation, chickenPathCreation } from "./gameObjects/Chicken";


const gameCanvas = new UICanvas();

//createTest(gameCanvas);

boxBuilder()

let dio = new Array
dio.push(4, 9, 11)

chickenPathCreation(dio)

