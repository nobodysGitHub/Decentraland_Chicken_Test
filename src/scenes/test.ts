import { getUserAccount } from "@decentraland/EthereumController";
import { getUserPublicKey } from "@decentraland/Identity";
import { getPlayerData } from "@decentraland/Players";
import { Button, TiketNumber,listOfPatecipants } from "../utilities/index";


export function createTest(gameCanvas: UICanvas)
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));

    button.addComponent(new OnPointerDown((): void =>
    {
        button.pressed();

        
        
        

        const ratto = doSomething();
        async function doSomething() 
        {
            let result = await getUserPublicKey();
            
            if(result != null){
                return result + 1; 
            }
        }
        log(ratto);
        


        //if playerWallet !null
        //send (address to SM)
        
        //if transaction successful
        
        let num = Math.random() * (100 - 1) + 1; // num will never reach the max value (in this case 100) 
        log(num);
        let round = Math.round(num); //but because i use math.round if it reach 99.6 it will turn to 100
        log(round);

        //show that number in a ui
        const stringNumber = round.toString();
        const tiket = new TiketNumber(gameCanvas, stringNumber);

        //add number to list
        //add address to list
        //listOfPatecipants(playerWallet, round)
    }));
}