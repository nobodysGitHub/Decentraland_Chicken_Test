//import { chickenPathCreation } from "src/gameObjects/Chicken";

import { TiketNumber } from "src/UI/TiketNumber";


const numbersOfTickets = new Array();
const playersAddresses = new Array();

export function addToLists(adress: string, ticketNumber: number)
{
    numbersOfTickets.push(ticketNumber);
    playersAddresses.push(adress);
    log(playersAddresses);
    log(numbersOfTickets);
}

export function playerMoreThenTwo(): boolean
{
    let theyAre;

    if(playersAddresses.length >= 2)
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

export function recompensatePlayer(poop: Boolean, winningNumber: Number)
{
    if(poop)
    {
        for(let i = 0; i < numbersOfTickets.length; i++)
        {
            if(winningNumber = numbersOfTickets[i])
            {
                const winner = playersAddresses[i]
                log(winner)


                //leadboard data
            }
        } 
    }
    else 
    {
        for(let i = 0; i < numbersOfTickets.length; i++)
        {
            if(winningNumber = numbersOfTickets[i])
            {
                const winner = playersAddresses[i]
                log(winner)


                //paga il player
            }
        } 
    }
}


