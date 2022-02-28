export class Timer extends Entity
{
    constructor(roundTimeInSeconds: number)
    {
        super();
        engine.addEntity(this);

        this.addComponent(new Transform({
            position: new Vector3(7, 5, 1),
            rotation: Quaternion.Euler(0, 180, 0)
        }))

        this.addComponent(new TextShape(this.formatTimeString(roundTimeInSeconds)));  //this.addComponent(new BoxShape()); if you add a box shape with a text shape, the text will turn into a texture

        this.getComponent(TextShape).color = Color3.Red();
        this.getComponent(TextShape).fontSize = 10;
    }

    private formatTimeString(seconds: number): string
    {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return (
        mins.toLocaleString(undefined, {minimumIntegerDigits: 2})
        + ":" +
        secs.toLocaleString(undefined, {minimumIntegerDigits: 2}))
    }

    public updateTimeString(seconds: number): void
    {
        this.getComponent(TextShape).value = this.formatTimeString(seconds);
    }
    
}
