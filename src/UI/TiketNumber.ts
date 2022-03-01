import { Button } from "../gameObjects/Button";
import resources from "../utilities/resources";

export class TiketNumber{

    public container: UIContainerRect;

    constructor(gameCanvas: UICanvas, tiketNumber: String)
    {
        this.container = new UIContainerRect(gameCanvas);
        this.container.width = "100%"
        this.container.height = "100%"

        const tiket = new UIImage(this.container, resources.textures.tiket)
        tiket.sourceHeight = 1378;
        tiket.sourceWidth = 2634;
        tiket.height = 137.8;
        tiket.width = 263.4;
        tiket.positionX = 700;
        tiket.positionY = 300;

        
        const number = new UIText(this.container)
        number.outlineColor = new Color4 (0.7, 0.3, 0.3, 1)
        number.value = "" + tiketNumber;
        number.fontSize = 60;
        number.width = 500;
        number.height = 205;
        number.positionX = 455;
        number.positionY = 0;
        number.color = new Color4(0.7, 1, 0.8, 1);
        number.textWrapping = true;
        
        
        
        
        /*const closeButton = new UIImage(this.container, resources.textures.closeButton)
        closeButton.sourceHeight = 92;
        closeButton.sourceWidth = 92;
        closeButton.height = 46;
        closeButton.width = 46;
        closeButton.positionX = 256;
        closeButton.positionY = 256;*/
        
        /*closeButton.onClick = new OnPointerDown((): void =>{
            this.container.visible = false;
        })*/
    }
}