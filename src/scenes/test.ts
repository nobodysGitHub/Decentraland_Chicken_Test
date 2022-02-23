import { Button } from "../utilities/index";

export function createTest()
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));

    button.addComponent(new OnPointerDown((): void =>
    {
        button.pressed();
        
        // num will never reach the max value (in this case 100) but because i use math.round if it reach 99.6 it will turn to 100
        let num = Math.random() * (100 - 1) + 1;

        log(num);

        let round = Math.round(num);

        log(round);

        //show that number in a ui

        
    }));
}