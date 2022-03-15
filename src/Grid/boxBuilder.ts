import { box } from "./box"

let boxesPositions = new Array

export function boxBuilder()
{
    //Values to modify
    const rowLenght = 8

    const boxStartPosX = 10
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

    //#region bigBox
    let flikeringFix = 0.01
    let howManySpacings = rowLenght - 1
    let howMuchSpacings = boxSpacing - 1 //remove the size of the box and you find the actual spacing
    let bigBoxSize = rowLenght + (howManySpacings * howMuchSpacings) - flikeringFix
    let pivotBoxPoseX = boxStartPosX - 0.5
    let pivotBoxPoseZ = boxStartPosZ + 0.5
    let bigBoxCenter = (bigBoxSize + flikeringFix) / 2
    let bigBoxPoseX = pivotBoxPoseX + bigBoxCenter
    let bigBoxPoseZ = pivotBoxPoseZ - bigBoxCenter


    const bigBox = new Entity()
    engine.addEntity(bigBox)

    bigBox.addComponent(new BoxShape)
    bigBox.addComponent(new Transform({
        scale: new Vector3(bigBoxSize, 0.1, bigBoxSize),
        position: new Vector3(bigBoxPoseX, 0, bigBoxPoseZ)
    }))

    const mat = new Material
    mat.albedoColor = Color3.Black()
    bigBox.addComponent(mat)

    bigBox.setParent(parent)
    //#endregion


    parent.addComponent(new Transform({
        //position: new Vector3(10,0,10),
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

