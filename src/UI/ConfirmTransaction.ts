import { transaction } from "src/scenes/transactions";

const imageTexture = new Texture('images/Pay_UI.png')
const scale = 0.55
const paymentAmount = 1



export class ConfirmTransaction
{
    public container: UIContainerRect;

    constructor(gameCanvas: UICanvas)
    {
        this.container = new UIContainerRect(gameCanvas);
        this.container.width = "100%";
        this.container.height = "100%";


        let background = new UIImage(this.container, imageTexture)

        background.name = 'background'
        background.width = 1024 * scale
        background.height = 448 * scale
        background.hAlign = 'center'
        background.vAlign = 'center'
        background.positionY = 0
        background.sourceLeft = 0
        background.sourceTop = 0
        background.sourceWidth = 1024
        background.sourceHeight = 429
        background.visible = true
        background.isPointerBlocker = true


        const currentPayment = new UIText(background)
        currentPayment.value = paymentAmount.toString() + ' MANA'
        currentPayment.name = 'currentPayment'
        currentPayment.width = 200 * scale
        currentPayment.height = 100 * scale
        currentPayment.hAlign = 'center'
        currentPayment.vAlign = 'center'
        currentPayment.positionY = 18
        currentPayment.positionX = -37 * scale
        currentPayment.fontSize = 35 * scale
        currentPayment.vTextAlign = 'center'
        currentPayment.hTextAlign = 'center'
        currentPayment.color = Color4.FromHexString('#FF0050FF')


        const AcceptButton = new UIImage(background, imageTexture)
        AcceptButton.name = 'AcceptButton'
        AcceptButton.width = 460 * scale
        AcceptButton.height = 80 * scale
        AcceptButton.hAlign = 'center'
        AcceptButton.vAlign = 'center'
        AcceptButton.positionY = -60
        AcceptButton.positionX = -130
        AcceptButton.sourceLeft = 475
        AcceptButton.sourceTop = 425
        AcceptButton.sourceWidth = 460
        AcceptButton.sourceHeight = 74
        AcceptButton.isPointerBlocker = true

        AcceptButton.onClick = new OnPointerDown(() => 
        {
            this.container.visible = false
            transaction(gameCanvas);
        })


        const CancelButton = new UIImage(background, imageTexture)
        CancelButton.name = 'AcceptButton'
        CancelButton.width = 460 * scale
        CancelButton.height = 80 * scale
        CancelButton.hAlign = 'center'
        CancelButton.vAlign = 'center'
        CancelButton.positionY = -60
        CancelButton.positionX = 130
        CancelButton.sourceLeft = 0
        CancelButton.sourceTop = 425
        CancelButton.sourceWidth = 460
        CancelButton.sourceHeight = 74
        CancelButton.isPointerBlocker = true

        CancelButton.onClick = new OnPointerDown(() => 
        {
            this.container.visible = false
        })
    }
}