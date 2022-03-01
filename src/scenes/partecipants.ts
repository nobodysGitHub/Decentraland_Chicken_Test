import { ExpireIn } from "@dcl/ecs-scene-utils";
import { createTest } from "./test";

const numberOfTicket = new Array();
const playerAddress = new Array();

export function addToLists(adress: string, ticketNumber: number)
{
    numberOfTicket.push(ticketNumber);
    playerAddress.push(adress);
    log(playerAddress);
    log(numberOfTicket);

    if(playerAddress.length >= 2)
    {
        
    }
}

export function playerAreMoreThenTwo(): boolean
{

    const isTrue = true;
    log ("dio porco" + isTrue)
    return isTrue;

    /*if(playerAddress.length >= 2)
    {
        isTrue = true;
        return isTrue;
    }
    else
    {
        isTrue = true;
        return isTrue;
    }*/
}


