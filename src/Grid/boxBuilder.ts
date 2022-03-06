import { howManyBoxes } from "src/scenes/printingTicket"
import { box } from "./box"

export function boxBuilder()
{
    //Values to modify
    const rowLenght = 6
    const boxStartPosX = 20
    const boxStartPosZ = 15
    const boxSpacing = 1.2
    const boxesRotationY = 0;


    //Values that doesn't need to be modifyed
    let rowSpotNumber = 0
    let boxNumber = 1;
    let posZ = boxStartPosZ
    let posX = boxStartPosX
    const boxesAmount = rowLenght * rowLenght;

    let boxArray = new Array
    const parent = new Entity
    engine.addEntity(parent)

    //let the script printing tikets know how many boxes are in the scene
    howManyBoxes(boxesAmount)


    for(let i = 0; i < boxesAmount; i++)
    {        
        //New position for the box 
        let boxPosition = new Vector3(posX, 0 , posZ);
        const obj = new box(boxPosition, boxNumber)
        obj.setParent(parent)

        //shifting row position
        posX += boxSpacing
        rowSpotNumber++

        if(rowSpotNumber == rowLenght)
        {
            //create a new column
            posZ -= boxSpacing
            posX = boxStartPosX
            rowSpotNumber = 0 
        }

        boxNumber++; 

        boxArray.push(boxPosition)
    }

    parent.addComponent(new Transform({
        rotation: Quaternion.Euler(0, boxesRotationY, 0)
    }))

    log(boxArray)
}