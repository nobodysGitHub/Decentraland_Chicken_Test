import { returnRelativeBoxPosition } from "src/Grid/boxBuilder";
import resources from "src/utilities/resources";

let chicken = new Entity

export function chickenCreation()
{
  chicken = new Entity();
  chicken.addComponent(new BoxShape)
  chicken.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
    rotation: Quaternion.Euler(0, -90, 0)
      
  }))
  engine.addEntity(chicken)
    
      
    
  
  chicken.addComponent(new LerpData())

  engine.addSystem(new pathAttuation)
}






const animCooldown = 5
let timer = animCooldown
let entering = true
let walking = false

const spawnPoint = new Vector3(8, 0, 8)
const enterExitPoint = new Vector3(8.3, 0, 8)
let actualPose = new Vector3
const enterPath: Vector3[]= [spawnPoint, enterExitPoint]
const exitPath: Vector3[] = [actualPose, enterExitPoint, spawnPoint]
let Wanderpath = new Array


export class pathAttuation
{
  update(dt: number)
  {
    timer -= dt
    /*if(timer >= 0)/*/

    
      if (entering){
        let transform = chicken.getComponent(Transform)
        let pathData = chicken.getComponent(LerpData)
        pathData.fraction += dt / 12
  
        if(pathData.fraction < 1)
        {
          transform.position = Vector3.Lerp(
          pathData.enterPoints[pathData.origin],
          pathData.enterPoints[pathData.target], 
          pathData.fraction)         
        }
        else
        {
          entering = false
          walking = true
          log("aio")
          
  
          //timer = animCooldown
          pathData.fraction = 0
        }
      }

      if (walking){
        
        let transform = chicken.getComponent(Transform)
        let pathData = chicken.getComponent(LerpData)
        pathData.fraction += dt / 12  
    
        if(pathData.fraction < 1)
        {
          transform.position = Vector3.Lerp(
            pathData.wanderPoints[pathData.origin],
            pathData.wanderPoints[pathData.target], 
            pathData.fraction)
        }
        else
        {
          
          if(pathData.origin = takenBoxLocationInPathArrayIndex[howManyTakenNumbers])
          {
            //poop
            howManyTakenNumbers++
          }
    
          pathData.origin = pathData.target
          pathData.target += 1
    
          if (pathData.target >= pathData.wanderPoints.length) 
          {
            //la lista dei punti e' finita
            //caga l'uovo
            walking = false
          }
    
          timer = animCooldown
          pathData.fraction = 0
          transform.lookAt(pathData.wanderPoints[pathData.target])
        } 
      }
      
      else if(!entering){
        let transform = chicken.getComponent(Transform)
        storeActualPose(transform)
        let pathData = chicken.getComponent(LerpData)
        pathData.fraction += dt / 12
  
        if(pathData.fraction < 1)
        {
          transform.position = Vector3.Lerp(
          pathData.exitPoints[pathData.origin],
          pathData.exitPoints[pathData.target], 
          pathData.fraction)
        }
        else
        {
          pathData.origin = pathData.target
          pathData.target += 1
  
          if (pathData.target >= pathData.exitPoints.length) 
          {
            //e' arrivato alla fine
            //remove component
          }
  
          timer = animCooldown
          pathData.fraction = 0
          transform.lookAt(pathData.exitPoints[pathData.target])
        }
      }
    }
  }


export function storeActualPose(transform: Transform){
    let i = 0
    if (i = 0){
      actualPose = transform.position   
      i++
    }
}



let pathInNumbers = new Array
let takenBoxLocationInPathArrayIndex = new Array
let howManyTakenNumbers = 0

export function chickenPathCreation(takenNumbers: Array<number>)
{
  for(let i = 0; i < 10; i++)
  {    
    let odds = Math.random()
    if(odds > 0.02)
    {
      //add RANDOM box number 
      let num = Math.random() * 36
      let randomBoxNumber = Math.floor(num)
      pathInNumbers.push(randomBoxNumber) 
    }
    else
    {
      //add RANDOM taken box number
      let num = Math.random() * (takenNumbers.length)
      let randomTakenBoxNumber = Math.floor(num)
      pathInNumbers.push(takenNumbers[randomTakenBoxNumber])
      takenBoxLocationInPathArrayIndex.push(pathInNumbers.length - 1)
    }
  }

  Wanderpath =  returnRelativeBoxPosition(pathInNumbers)
  log(pathInNumbers)

  //chickenCreation()
}  



@Component('lerpData')
export class LerpData 
{
  enterPoints: Vector3[] = enterPath
  wanderPoints: Vector3[] = Wanderpath
  exitPoints: Vector3[] = exitPath   

  origin: number = 0
  target: number = 1
  fraction: number = 0
}



