class Fish extends MovableObject{

    IMAGES_WALKING = [ //Den Farbwechsel vllt. für Schwierigkeitsgrad/Level nutzen 
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
       '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    constructor(){
        super().loadImage('../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 200 + Math.random()*500;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.3;
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 6);
        setInterval(() =>{
            this.moveLeft();
        }, 1000 / 60)
        
    }
}