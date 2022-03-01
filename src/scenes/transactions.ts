import { getUserAccount } from "@decentraland/EthereumController";
import { printingTicket } from "./printingTicket";

export function transaction(gameCanvas: UICanvas)
{
    //se if it has already the ticket
    //see balance
    //if positive, sendo money to our account
    //if transaction successfull

    //get the user account
    executeTask(async () => {
    try 
    {
        const address = await getUserAccount();
        printingTicket(gameCanvas, address);
    } 
    catch (error) 
    {
        log("playerDoesntHaveAddress");
    }})           

    
}