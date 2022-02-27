import { Button, ConfirmTransaction, Partecipants, addToLists } from "../utilities/index";



export function createTest(gameCanvas: UICanvas)
{
    const button = new Button(new Transform({position: new Vector3(10, 0, 10)}));

    button.addComponent(new OnPointerDown((): void =>
    {
        button.pressed();

        const confirmPayment = new ConfirmTransaction(gameCanvas); 
    }));
}