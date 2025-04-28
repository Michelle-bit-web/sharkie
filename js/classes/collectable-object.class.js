class CollectableObjects extends DrawableObject{

    constructor(){
        super().loadImage("../assets/img/4. Marcadores/Posión/Dark - Right.png");
        
        this.x = 100 + Math.random()*250;
        this.y = 320;
    }
}