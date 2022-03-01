import * as utils from '@dcl/ecs-scene-utils'
import { Button, ConfirmTransaction, Timer, playerAreMoreThenTwo} from "../utilities/index";



export function createTest(gameCanvas: UICanvas)
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));
    const stronzo = false;
    
    button.addComponent(new OnPointerDown((): void =>
    {
        button.pressed();

        const confirmPayment = new ConfirmTransaction(gameCanvas); 
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
            //if players > 2
            
            const cane = playerAreMoreThenTwo();
            log(cane);


            //start the game
        }
    }))
}