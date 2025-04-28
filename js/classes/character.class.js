class Character extends MovableObject {
  width = 150;
  height = 200;
  y = 80;
  world;
  speed = 15;
  speedY = 0;
  acceleration = 1;
  IMAGES_SWIMMING = [
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
  IMAGES_DYING = [
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "../assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
  ];
  IMAGES_DYING_ELECTRO = [
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "../assets/img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];
  IMAGES_HURT = [
    "../assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "../assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "../assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "../assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png",

  ];
  IMAGES_HURT_ELECTRO = [
    "../assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "../assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "../assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  constructor() {
    super().loadImage("../assets/img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_RESTING);
    this.loadImages(this.IMAGES_DYING);
    this.loadImages(this.IMAGES_DYING_ELECTRO);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_HURT_ELECTRO);
    this.animate();
    this.applyGravity();
  }
  offset = {
    top: 105,
    left: 40,
    right: 40,
    bottom: 55
  }

  animate() {
    setInterval(() => {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
          this.moveRight();
          this.otherDirection = false;
          //audio method
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
          this.moveLeft();
          this.otherDirection = true;
          //audio method
        }
        if (this.world.keyboard.UP) {
          this.speedY = 8;
      }
        this.world.camera_x = -this.x + 100;
    }, 1000 / 30);

    setInterval(() => {
      if (this.isDead()) { 
        if(this.hitByEnemyType.name == "JellyFish"){
          this.playAnimation(this.IMAGES_DYING_ELECTRO);
        }else{
          this.playAnimation(this.IMAGES_DYING);
        }
      } else if (this.isHurt()) { 
        if(this.hitByEnemyType.name == "JellyFish"){
          this.playAnimation(this.IMAGES_HURT_ELECTRO);
        }else{
          this.playAnimation(this.IMAGES_HURT);
        }
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { //this.world.keyboard.SPACE for jump
         this.playAnimation(this.IMAGES_SWIMMING);
       } else{
         this.playAnimation(this.IMAGES_RESTING); 
       };
    }, 50);      
  }
  jump() {}
}
