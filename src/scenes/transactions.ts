import { getUserAccount } from "@decentraland/EthereumController";
import { printingTicket } from "./printingTicket";

export function transaction(gameCanvas: UICanvas)
{
    const adress = "";
    //get the user account
    executeTask(async () => {
    try 
    {
        const address = await getUserAccount();
        log(address);
    } 
    catch (error) 
    {
        log("playerDoesntHaveAddress");
    }})           

    //see balance
    //if positive, sendo money to our account
    //if transaction successfull
    printingTicket(gameCanvas, adress);
}