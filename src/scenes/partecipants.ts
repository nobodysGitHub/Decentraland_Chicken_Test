//import { chickenPathCreation } from "src/gameObjects/Chicken";


const numberOfTickets = new Array();
const playerAddress = new Array();

export function addToLists(adress: string, ticketNumber: number)
{
    numberOfTickets.push(ticketNumber);
    playerAddress.push(adress);
    log(playerAddress);
    log(numberOfTickets);
}

export function playerMoreThenTwo(): boolean
{
    let theyAre;

    if(playerAddress.length >= 2)
    {
        theyAre = true;
        //chickenPathCreation(numberOfTickets)
        return theyAre;
    }
    else
    {
        theyAre = false;
        return theyAre;
    }
}


