

const chicken = new Entity();
//chicken.addComponent(Source.models.dog)
chicken.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  rotation: Quaternion.Euler(0, -90, 0)
  
}))

engine.addEntity(chicken)

let chickenAnimator = new Animator
chicken.addComponent(chickenAnimator)

//#region anim
let sit = new AnimationState('Sitting', { looping: false })
let stand = new AnimationState('Standing', { looping: false })
let walk = new AnimationState('Walking')
let idle = new AnimationState('Idle')

chickenAnimator.addClip(sit)
chickenAnimator.addClip(stand)
chickenAnimator.addClip(walk)
chickenAnimator.addClip(idle)
//#endregion






const animCooldown = 5
let timer = animCooldown
let entering = true
let walking = false

const spawnPoint = new Vector3
const enterExitPoint = new Vector3
let actualPose = new Vector3
const enterArray: Vector3[]= [spawnPoint, enterExitPoint]
const exitArray: Vector3[] = [actualPose, enterExitPoint, spawnPoint]



export function storeActualPose(transform: Transform){
  let i = 0
  if (i = 0){
    actualPose = transform.position   
    i++
  }
}

export class pathWalk
{
  update(dt: number)
  {
    timer -= dt

    if(timer >= 0)
    {
      if (entering){
        let transform = chicken.getComponent(Transform)
        let path = chicken.getComponent(LerpData)
        path.fraction += dt / 12
  
        if(path.fraction < 1)
        {
          transform.position = Vector3.Lerp(
          path.enterArray[path.origin],
          path.enterArray[path.target], 
          path.fraction)
        }
        else
        {
          path.origin = path.target
          path.target += 1
  
          if (path.target >= path.enterArray.length) 
          {
            entering = false
            walking = true
          }
  
          timer = animCooldown
          path.fraction = 0
          transform.lookAt(path.enterArray[path.target])
        }
      }

      if (walking){
        let transform = chicken.getComponent(Transform)
        let path = chicken.getComponent(LerpData)
        path.fraction += dt / 12
    
        if(path.fraction < 1)
        {
          transform.position = Vector3.Lerp(
            path.walkArray[path.origin],
            path.walkArray[path.target], 
            path.fraction)
        }
        else
        {
          if(path.origin = takenBoxLocationInPathArrayIndex[howManyTakenNumbers])
          {
            //poop
            howManyTakenNumbers++
          }
    
          path.origin = path.target
          path.target += 1
    
          if (path.target >= path.walkArray.length) 
          {
            //la lista dei punti e' finita
            //caga l'uovo
            walking = false
          }
    
          timer = animCooldown
          path.fraction = 0
          transform.lookAt(path.walkArray[path.target]) 
        } 
      }
      else if(!entering){
        let transform = chicken.getComponent(Transform)
        storeActualPose(transform)
        let path = chicken.getComponent(LerpData)
        path.fraction += dt / 12
  
        if(path.fraction < 1)
        {
          transform.position = Vector3.Lerp(
          path.exitArray[path.origin],
          path.exitArray[path.target], 
          path.fraction)
        }
        else
        {
          path.origin = path.target
          path.target += 1
  
          if (path.target >= path.exitArray.length) 
          {
            //e' arrivato alla fine
            //remove component
          }
  
          timer = animCooldown
          path.fraction = 0
          transform.lookAt(path.exitArray[path.target])
        }
      }
    }
  }
}



let pathArray = new Array
let takenBoxLocationInPathArrayIndex = new Array
let howManyTakenNumbers = 0

export function chickenPathCreation(boxesAmmount: number, takenNumbers: Array<number>)
{
  for(let i = 0; i > 10; i++)
  {
    let odds = Math.random()
    if(odds > 0.02)
    {
      //add RANDOM box number 
      let randomBoxNumber = Math.random() * (boxesAmmount)
      pathArray.push(randomBoxNumber) 
    }
    else
    {
      //add RANDOM taken box number
      let randomArrayNumber = Math.random() * (takenNumbers.length)
      pathArray.push(takenNumbers[randomArrayNumber])
      takenBoxLocationInPathArrayIndex.push(pathArray.length - 1)
    }
  }
}  



@Component('lerpData')
export class LerpData {
  enterArray: Vector3[] = enterArray
  walkArray: Vector3[] = exitArray
  exitArray: Vector3[] = exitArray   

  origin: number = 0
  target: number = 1
  fraction: number = 0
}

chicken.addComponent(new LerpData())