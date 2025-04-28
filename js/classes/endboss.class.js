class Endboss extends MovableObject{
    height = 400;
    width = 250;
    y= 1;
    offset = {
        top: 210,
        left: 30,
        right: 30,
        bottom: 80
      }

    IMAGES_SHOW_UP = [ //Den Farbwechsel vllt. für Schwierigkeitsgrad/Level nutzen 
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
     IMAGES_FLOATING = [ 
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        '../assets/img/2.Enemy/3 Final Enemy/2.floating/13.png',
     ];
     IMAGES_ATTACKING = [  
        '../assets/img/2.Enemy/3 Final Enemy/Attack/1.png',
        '../assets/img/2.Enemy/3 Final Enemy/Attack/2.png',
        '../assets/img/2.Enemy/3 Final Enemy/Attack/3.png',
        '../assets/img/2.Enemy/3 Final Enemy/Attack/4.png',
        '../assets/img/2.Enemy/3 Final Enemy/Attack/5.png',
        '../assets/img/2.Enemy/3 Final Enemy/Attack/6.png',
     ];
     IMAGES_HURT = [  
        '../assets/img/2.Enemy/3 Final Enemy/Hurt/1.png',
        '../assets/img/2.Enemy/3 Final Enemy/Hurt/2.png',
        '../assets/img/2.Enemy/3 Final Enemy/Hurt/3.png',
        '../assets/img/2.Enemy/3 Final Enemy/Hurt/4.png',
     ];
     IMAGES_DEAD = [  
        '../assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        '../assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        '../assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        '../assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        '../assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        '../assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
     ];
 
     constructor(){
         super().loadImage('../assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
         this.x = 500
         this.loadImages(this.IMAGES_SHOW_UP);
         this.loadImages(this.IMAGES_FLOATING);
         this.loadImages(this.IMAGES_ATTACKING);
         this.loadImages(this.IMAGES_HURT);
         this.loadImages(this.IMAGES_DEAD);
         this.animate();
         this.speed = 0.4;
     }
 
     animate(){
         setInterval(() => {
            this.playAnimation(this.IMAGES_SHOW_UP);
            this.playAnimation(this.IMAGES_FLOATING);
            this.playAnimation(this.IMAGES_ATTACKING);
            this.playAnimation(this.IMAGES_HURT);
            this.playAnimation(this.IMAGES_DEAD);
         }, 1000/2);
         this.moveLeft();
     }
}