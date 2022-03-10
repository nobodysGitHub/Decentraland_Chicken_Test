// costruttore della cacca
export class Droppable extends Entity
{
    constructor(poopPose: Vector3, poop: boolean)
    {
        super()
        engine.addEntity(this)
        
        this.addComponent(new BoxShape())
        this.addComponent(new Transform({
            position: new Vector3(poopPose.x, 0.7, poopPose.z),
            scale: new Vector3(0.1, 0.1, 0.1)
        }))

        if(poop)
        {
            const mat = new Material
            mat.albedoColor = Color3.Green()
            this.addComponent(mat)
        }
        else
        {
            const mat = new Material
            mat.albedoColor = Color3.Yellow()
            this.addComponent(mat)
        }
        
    }
}

/**leadboard
 * store players address
 * store howmany poop
 * ^
 * 
 * 
 * sei un droppable, 
 * - ricevi un transform di dove apparire 
 * - e una bool, se sei cacca o se sei un uovo
 *      a seconda della bool instanzi un modello diverso 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */