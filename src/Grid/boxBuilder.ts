import { box } from "./box"

let boxesPositions = new Array

export function boxBuilder()
{
    //Values to modify
    const rowLenght = 6

    const boxStartPosX = 1
    const boxStartPosZ = 10
    const boxesRotationY = 0;
    const boxSpacing = 1.2


    //Values that doesn't need to be modifyed
    let rowSpotNumber = 0
    let boxNumber = 1;
    let posZ = boxStartPosZ
    let posX = boxStartPosX
    const boxesAmount = rowLenght * rowLenght;

    const parent = new Entity
    engine.addEntity(parent)



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

        boxesPositions.push(boxPosition)
    }

    parent.addComponent(new Transform({
        rotation: Quaternion.Euler(0, boxesRotationY, 0)
    }))
}

export function returnRelativeBoxPosition(boxPath: Array<number>): Array<Vector3>
{
    let pathBoxesPositions = new Array

    for(let i = 0; i < boxPath.length; i++)
    {
        let boxNumber = boxPath[i]
        pathBoxesPositions.push(boxesPositions[boxNumber])
    }
    
    return pathBoxesPositions
}

