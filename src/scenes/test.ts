import * as utils from '@dcl/ecs-scene-utils'
import { Button, ConfirmTransaction, Timer} from "../utilities/index";



export function createTest(gameCanvas: UICanvas)
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));

    
    button.addComponent(new OnPointerDown((): void =>
    {
        button.pressed();

        const confirmPayment = new ConfirmTransaction(gameCanvas); 
    }));


    let roundTimeInSeconds = 100;
    const countDownClock = new Timer(roundTimeInSeconds);

    countDownClock.addComponent(new utils.Interval(1000, (): void => 
    {
        roundTimeInSeconds--;

        if (roundTimeInSeconds > 0)
        {
            countDownClock.updateTimeString(roundTimeInSeconds);
        }
        else
        {
            countDownClock.removeComponent(utils.Interval);
            //start the game
        }

    }))









}