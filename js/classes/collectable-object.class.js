class CollectableObjects extends MovableObject{
    imageType;

    IMAGES_COIN = [
        "../assets/img/4. Marcadores/1. Coins/1.png",
        "../assets/img/4. Marcadores/1. Coins/2.png",
        "../assets/img/4. Marcadores/1. Coins/3.png",
        "../assets/img/4. Marcadores/1. Coins/4.png",
    ];
    IMAGE_POISON = "../assets/img/4. Marcadores/Posión/Dark - Right.png";

    constructor(imageType, x, y){
        super();
        this.imageType = imageType;
        this.x = x;
        this.y = y;
        this.getImageType();
    }

    getImageType(){
        if(this.imageType == "coin"){
            this.setSize(40, 40);
            this.loadImage(this.IMAGES_COIN[0]);
            this.loadImages(this.IMAGES_COIN);
            this.animate();
        } else if(this.imageType == "poison"){
            this.setSize(50,70);
            this.setRandomPosition();
            this.loadImage(this.IMAGE_POISON);
        }
    }

    setSize(width, height){
        this.width = width;
        this.height = height;
    }

    setRandomPosition(){
        this.x = 100 + Math.random()*300;
    }

    animate(){
        setInterval(() =>{
            this.playAnimation(this.IMAGES_COIN);
        }, 500)
    }
}