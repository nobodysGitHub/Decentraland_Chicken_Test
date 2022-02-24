import { getUserAccount } from "@decentraland/EthereumController";
import { getUserPublicKey } from "@decentraland/Identity";
import { getPlayerData } from "@decentraland/Players";
import { Button, TiketNumber,creatingLists, ConfirmTransaction } from "../utilities/index";



export function createTest(gameCanvas: UICanvas)
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));

    button.addComponent(new OnPointerDown((): void =>
    {
        button.pressed();

        const payment = new ConfirmTransaction(gameCanvas);



        //if transaction successful

        //create ticket number
        let num = Math.random() * (100 - 1) + 1; // num will never reach the max value (in this case 100) 
        log(num);
        let round = Math.round(num); //but because i use math.round if it reach 99.6 it will turn to 100
        log(round);

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
        

        //add number and account to arrays

        //show the ticket number to the player
        const stringNumber = round.toString();
        //const tiket = new TiketNumber(gameCanvas, stringNumber);       
    }));
}