export class Button extends Entity
{
    constructor(transform: TranformConstructorArgs)
    {
        super()
        engine.addEntity(this);

        this.addComponent(new BoxShape());
        this.addComponent(transform);

        this.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")));
    }

    public pressed()
    {
        this.getComponent(AudioSource).playOnce();
    }
} 