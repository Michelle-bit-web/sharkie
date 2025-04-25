class Character extends MovableObject {
  width = 150;
  height = 200;
  y = 80;
  world;
  speed = 15;
  speedY = 0;
  acceleration = 1;
  IMAGES_WALKING = [
    "../assets/img/1.Sharkie/3.Swim/1.png",
    "../assets/img/1.Sharkie/3.Swim/2.png",
    "../assets/img/1.Sharkie/3.Swim/3.png",
    "../assets/img/1.Sharkie/3.Swim/4.png",
    "../assets/img/1.Sharkie/3.Swim/5.png",
    "../assets/img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_RESTING = [
    "../assets/img/1.Sharkie/1.IDLE/1.png",
    "../assets/img/1.Sharkie/1.IDLE/2.png",
    "../assets/img/1.Sharkie/1.IDLE/3.png",
    "../assets/img/1.Sharkie/1.IDLE/4.png",
    "../assets/img/1.Sharkie/1.IDLE/5.png",
    "../assets/img/1.Sharkie/1.IDLE/6.png",
    "../assets/img/1.Sharkie/1.IDLE/7.png",
    "../assets/img/1.Sharkie/1.IDLE/8.png",
    "../assets/img/1.Sharkie/1.IDLE/9.png",
    "../assets/img/1.Sharkie/1.IDLE/10.png",
    "../assets/img/1.Sharkie/1.IDLE/11.png",
    "../assets/img/1.Sharkie/1.IDLE/12.png",
    "../assets/img/1.Sharkie/1.IDLE/13.png",
    "../assets/img/1.Sharkie/1.IDLE/14.png",
    "../assets/img/1.Sharkie/1.IDLE/15.png",
    "../assets/img/1.Sharkie/1.IDLE/16.png",
    "../assets/img/1.Sharkie/1.IDLE/17.png",
    "../assets/img/1.Sharkie/1.IDLE/18.png",
  ];

  constructor() {
    super().loadImage("../assets/img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_RESTING);
    this.animate();
    this.applyGravity();
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
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { //this.world.keyboard.SPACE for jump
        this.playAnimation(this.IMAGES_WALKING);
      }else{
        this.playAnimation(this.IMAGES_RESTING); 
      };
    }, 50);      
  }

  applyGravity(){
    setInterval(() => {
      if(this.isAboveGround()){
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25)
  }
isAboveGround(){
  return this.y < 130;
}
  jump() {}
}
