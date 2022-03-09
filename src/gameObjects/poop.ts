// costruttore della cacca
export class Poop extends Entity
{
    constructor(poopPose: Vector3)
    {
        super()
        engine.addEntity(this)
        
        this.addComponent(new BoxShape())
        this.addComponent(new Transform({
            position: new Vector3(poopPose.x, 0.7, poopPose.z),
            scale: new Vector3(0.1, 0.1, 0.1)
        }))

        
        const mat = new Material
        mat.albedoColor = Color3.Green()
        this.addComponent(mat)
    }
}

/**leadboard
 * store players address
 * store howmany poop
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