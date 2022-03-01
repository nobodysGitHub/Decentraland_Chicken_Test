// imprt obj from gameObjects folder
import { createTest } from "src/scenes/test";
import { Button } from "../gameObjects/Button";
import { TiketNumber } from "../UI/TiketNumber";
import { addToLists } from "../scenes/partecipants";
import { ConfirmTransaction } from "../UI/ConfirmTransaction";
import { transaction } from "src/scenes/transactions";
import { printingTicket } from "src/scenes/printingTicket";
import { Timer } from "src/gameObjects/Timer";
import { playerAreMoreThenTwo } from "../scenes/partecipants";

// export to make it visible for 
export { Button, TiketNumber,  ConfirmTransaction, addToLists, transaction, printingTicket, Timer, createTest, playerAreMoreThenTwo }