export default   // in this way, you create just one istance of an object, then reference this script in another one and acces the model you whant
{
    textures: 
    {
        closeButton: new Texture("images/button_close.png"),
        tiket: new Texture("images/Ticket.png")
    },

    models:
    {
        doggo: new GLTFShape("models/BlackDog.glft")
    }
}