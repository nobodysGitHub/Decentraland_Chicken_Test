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
}

export function playerMoreThenTwo(): boolean
{
    let isTrue;

    if(playerAddress.length >= 2)
    {
        isTrue = true;
        return isTrue;
    }
    else
    {
        isTrue = false;
        return isTrue;
    }
}


