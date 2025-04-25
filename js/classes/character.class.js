class Character extends MovableObject {
  width = 150;
  height = 200;
  y = 130;
  world;
  speed = 15;
  IMAGES_WALKING = [
    "../assets/img/1.Sharkie/3.Swim/1.png",
    "../assets/img/1.Sharkie/3.Swim/2.png",
    "../assets/img/1.Sharkie/3.Swim/3.png",
    "../assets/img/1.Sharkie/3.Swim/4.png",
    "../assets/img/1.Sharkie/3.Swim/5.png",
    "../assets/img/1.Sharkie/3.Swim/6.png",
  ];

  constructor() {
    super().loadImage("../assets/img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
            this.x += this.speed;
            this.otherDirection = false;
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
        this.world.camera_x = -this.x + 100;
    }, 1000 / 30);

    setInterval(() => {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        } 
    }, 50);
  }

  jump() {}
}
