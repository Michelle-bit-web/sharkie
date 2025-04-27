class MovableObject extends DrawableObject{
 speed = 0.25;
 otherDirection = false;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
  energy = 100;
  hitByEnemyType;
  lastHit = 0;   

  



  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    setInterval(() => {
      this.y -= this.speed;
    }, 1000 / 60);
  }

  isColliding(mo){
    return this.x + this.width > mo.x &&
    this.y + this.height > mo.y
    && this.x < mo.x 
    && this.y < mo.y + mo.height;
  }
  
  hit(){
   if(this.energy == 0){
    this.isDead();
   } else{
    this.energy -= 5;
    this.lastHit = new Date().getTime();
   }
  }

  isHurt(){
    let passedTime = new Date().getTime() - this.lastHit;
    passedTime = passedTime / 1000;
    return passedTime < 1;
  }

  isDead(){
    return this.energy == 0;
  }
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
