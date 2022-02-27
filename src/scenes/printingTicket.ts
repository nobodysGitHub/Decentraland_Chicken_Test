import { TiketNumber, addToLists } from "src/utilities/index";

export function printingTicket(gameCanvas: UICanvas, address: string)
{
    //create random ticket number
    let num = Math.random() * (100 - 1) + 1; // num will never reach the max value (in this case 100) 
    log(num);
    let ticketNumber = Math.round(num); //but because i use math.round if it reach 99.6 it will turn to 100
    log(ticketNumber);

    //show the ticket number to the player
    const stringNumber = ticketNumber.toString();
    const tiket = new TiketNumber(gameCanvas, stringNumber);  

    //send the number and the adress to list
    addToLists(address, ticketNumber);
}