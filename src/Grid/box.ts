export class box extends Entity{
    constructor(position: Vector3, number: number)
    {
        super()
        engine.addEntity(this)


        //creation of the model
        this.addComponent(new BoxShape)
        this.addComponent(new Transform({
            position: position,
        }))
        

        //cration of the number above the model
        const numberToDisplay = new Entity
        engine.addEntity(numberToDisplay)
        numberToDisplay.setParent(this)

        const stringNumber = number.toString()
        const upperPose = new Vector3(0, 0.51, 0)

        numberToDisplay.addComponent(new Transform({
            position: upperPose,    
            rotation: Quaternion.Euler(90, 0, 0)
        }))

        numberToDisplay.addComponent(new TextShape(stringNumber))
        numberToDisplay.getComponent(TextShape).color = Color3.Black()
        numberToDisplay.getComponent(TextShape).fontSize = 7
    }
}