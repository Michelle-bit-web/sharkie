class MovableObject extends DrawableObject {
  speed = 0.25;
  otherDirection = false;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  energy = 100;
  coins = 0;
  bottles = 0;
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

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }
  isAboveGround() {
    if(this instanceof ThrowableObject){
      return true
    }else{
      return this.y < 130;
    }
    
  }

  // isColliding(mo){
  //   return this.x + this.width > mo.x &&
  //   this.y + this.height > mo.y
  //   && this.x < mo.x
  //   && this.y < mo.y + mo.height;
  // }
  isColliding(mo) {
    const offsetX = this.x + this.offset.left;
    const offsetY = this.y + this.offset.top;
    const offsetWidth = this.width - this.offset.left - this.offset.right;
    const offsetHeight = this.height - this.offset.top - this.offset.bottom;

    const moOffsetX = mo.x + mo.offset.left;
    const moOffsetY = mo.y + mo.offset.top;
    const moOffsetWidth = mo.width - mo.offset.left - mo.offset.right;
    const moOffsetHeight = mo.height - mo.offset.top - mo.offset.bottom;

    return (
      offsetX + offsetWidth > moOffsetX &&
      offsetY + offsetHeight > moOffsetY &&
      offsetX < moOffsetX + moOffsetWidth &&
      offsetY < moOffsetY + moOffsetHeight
    );
  }

  hit() {
    if (this.energy == 0) {
      this.isDead();
    } else {
      this.energy -= 5;
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let passedTime = new Date().getTime() - this.lastHit;
    passedTime = passedTime / 1000;
    return passedTime < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
