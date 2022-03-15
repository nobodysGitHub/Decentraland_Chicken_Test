import { returnRelativeBoxPosition } from "src/Grid/boxBuilder";
import { recompensatePlayer } from "src/scenes/partecipants";
import resources from "src/utilities/resources";
import { Droppable } from "./poop";

let chicken = new Entity

export function chickenCreation()
{
  chicken = new Entity();
  chicken.addComponent(new BoxShape)
  chicken.addComponent(new Transform({
    position: new Vector3(8, 0.1, 8),
    rotation: Quaternion.Euler(0, -90, 0),
    scale: new Vector3(0.5, 1.7, 0.5)
  }))

  const mat = new Material
  mat.albedoColor = Color3.Blue()
  chicken.addComponent(mat)

  engine.addEntity(chicken)
    
      
    
  
  chicken.addComponent(new LerpData())

  engine.addSystem(new pathAttuation)
}






const animCooldown = 5
let timer = animCooldown
let entering = true
let walking = false
let exiting = false

const chickenSpawnPoint = new Vector3(2, 0, 12)
const chickEnenterExitPoint = new Vector3(1, 0, 11) //This has to be as close as possible to greed

let lastPathPoint = new Vector3
const enterPath: Vector3[]= [chickenSpawnPoint, chickEnenterExitPoint]
const exitPath: Vector3[] = [lastPathPoint, chickEnenterExitPoint, chickenSpawnPoint]
let WanderPath = new Array

let enterFirstStep = true
let firstStepExit = true


export class pathAttuation
{
  update(dt: number)
  {
    timer -= dt

    if(timer >= 0)
    {
      
        if (entering)
        {
          let transform = chicken.getComponent(Transform)
          let pathData = chicken.getComponent(LerpData)
          pathData.fraction += dt / 6
    
  
          if(pathData.fraction < 1)
          {
            if (enterFirstStep)
            {
              transform.position = Vector3.Lerp(
                pathData.enterPoints[0],
                pathData.enterPoints[1], 
                pathData.fraction)      
            }
            else
            {
              transform.position = Vector3.Lerp(
                pathData.enterPoints[1],
                pathData.wanderPoints[0], 
                pathData.fraction) 
            }
          }
          else //entra solo se hai raggiunto l'obbiettivo 
          {
            pathData.fraction = 0
  
            if(enterFirstStep)
            {
              enterFirstStep = false   //farai il secondo step
            }
            else
            {
              entering = false;    //passa a walking
              walking = true;
            }

            timer = animCooldown
          }
        }
        
  
        if (walking)
        {
          let transform = chicken.getComponent(Transform)
          let pathData = chicken.getComponent(LerpData)
          pathData.fraction += dt / 6  
      
          if(pathData.fraction < 1)
          {
            transform.position = Vector3.Lerp(
              pathData.wanderPoints[pathData.origin],
              pathData.wanderPoints[pathData.target], 
              pathData.fraction)
          }
          else
          {
            if(pathData.origin = wichOfTheListIsAnOwnNumber[indexArray])
            {
              //POOP
              const poop = new Droppable(transform.position, true)
  
              //get the player address that has that number
              recompensatePlayer(true, wichOfTheListIsAnOwnNumber[indexArray])
  
              indexArray++
            }
      
            pathData.origin = pathData.target
            pathData.target += 1
            pathData.fraction = 0
      
            if (pathData.origin >= pathData.wanderPoints.length - 1) 
            {
              //la lista dei punti e' finita
              //sono nell ultima casella, store the position
              let dio = chicken.getComponent(Transform).position
              lastPathPoint = dio
  
              log(transform.position)
              const egg = new Droppable(transform.position, false)
  
              //                            IT HAS TO BE GIVEN FROM THE SC
              recompensatePlayer(false, wichOfTheListIsAnOwnNumber[indexArray])
  
              transform.position = new Vector3(0, 0, 0)
              log("finish")
              engine.removeSystem(this)
  
  
              /*pathData.origin = 0
              pathData.target = 1
  
              walking = false
              exiting = true*/
            }
      
            timer = animCooldown
            //transform.lookAt(pathData.wanderPoints[pathData.target])
          } 
        }  
    }
  }
}










let MainPathSequence = new Array
let wichOfTheListIsAnOwnNumber = new Array
let indexArray = 0

export function chickenPathCreation(numbersOwnThisRound: Array<number>)
{
  for(let i = 0; i < 10; i++)
  {    
    let odds = Math.random()
    if(odds < 0.8)
    {
      //add RANDOM box number 
      let num = Math.random() * 36
      let randomBoxNumber = Math.floor(num)

      //create the path for the chicken
      MainPathSequence.push(randomBoxNumber) 
    }
    else 
    {
      //Select taken box number
      let num = Math.random() * (numbersOwnThisRound.length)
      let ranNumberSelected = Math.floor(num)

      //create the path for the chicken
      MainPathSequence.push(numbersOwnThisRound[ranNumberSelected])

      //To understand wich number of the sequence is the taken one
      wichOfTheListIsAnOwnNumber.push(MainPathSequence.length)
    }
  }

  WanderPath =  returnRelativeBoxPosition(MainPathSequence)
  log(WanderPath)

  chickenCreation()
}  



@Component('lerpData')
export class LerpData 
{
  enterPoints: Vector3[] = enterPath
  wanderPoints: Vector3[] = WanderPath
  exitPoints: Vector3[] = exitPath   

  origin: number = 0
  target: number = 1
  fraction: number = 0
}



