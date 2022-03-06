import * as utils from '@dcl/ecs-scene-utils'
import { Button, ConfirmTransaction, Timer, playerMoreThenTwo} from "../utilities/index";



export function createTest(gameCanvas: UICanvas)
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));

    let gameStarted = false;
    
    
    button.addComponent(new OnPointerDown((): void =>
    {
        if(!gameStarted)
        {
            button.pressed();
        
            const confirmPayment = new ConfirmTransaction(gameCanvas);
        }
        else
        {
            //manda un messaggio dicendo che il gioco e' gia' iniziato
        }
    }));
    


    let roundTimeInSeconds = 30;
    const countDownClock = new Timer(roundTimeInSeconds);

    countDownClock.addComponent(new utils.Interval(1000, (): void => 
    {
        roundTimeInSeconds--;

        if (roundTimeInSeconds > -1)
        {
            countDownClock.updateTimeString(roundTimeInSeconds);
        }
        else
        {
            countDownClock.removeComponent(utils.Interval);
            
            const areThey = playerMoreThenTwo();
            if(areThey)
            {                
                //start the game
                

                
                gameStarted = true;
            }
        }
    }))
}