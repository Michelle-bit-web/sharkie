class Endboss extends MovableObject{
    height = 400;
    width = 250;
    y= 1;

    IMAGES_WALKING = [ //Den Farbwechsel vllt. für Schwierigkeitsgrad/Level nutzen 
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        '../assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
     ];
 
     constructor(){
         super().loadImage('../assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
         this.x = 500
         this.loadImages(this.IMAGES_WALKING);
         this.animate();
         this.speed = 0.4;
     }
 
     animate(){
         setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
         }, 1000 / 6);
         this.moveLeft();
     }
}