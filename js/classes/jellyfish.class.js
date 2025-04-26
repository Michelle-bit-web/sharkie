class JellyFish extends MovableObject{

    IMAGES_WALKING = [ //Den Farbwechsel vllt. für Schwierigkeitsgrad/Level nutzen 
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',

      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
      '../assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',

      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',

      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
      '../assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];
    offset = {
        top: 15,
        left: 55,
        right: 55,
        bottom: 20
      }

    constructor(){
        super().loadImage('../assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.x = 200 + Math.random()*500;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.3
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 /4);
        this.moveUp();
    }
}