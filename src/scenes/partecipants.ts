const numberOfTicket = new Array();
const playerAddress = new Array();

export class Partecipants extends Entity
{
    eid()
    {
        log(numberOfTicket)
        numberOfTicket.push(3)
        log(numberOfTicket)
    }
}

export function addToLists(adress: string, ticketNumber: number)
{
    numberOfTicket.push(ticketNumber);
    playerAddress.push(adress);
    log(playerAddress);
    log(numberOfTicket);
}

