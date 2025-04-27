class DrawableObject{
    x = 10;
    y = 180;
    img;
    width = 70;
    height = 90;
    currentImage = 0;
    imageCache = {};
  
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
  drawOffsetFrame(ctx) {
    if (this instanceof Character || this instanceof Fish || this instanceof JellyFish || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
  
      const offsetX = this.x + this.offset.left;
      const offsetY = this.y + this.offset.top;
      const offsetWidth = this.width - this.offset.left - this.offset.right;
      const offsetHeight = this.height - this.offset.top - this.offset.bottom;
  
      ctx.rect(offsetX, offsetY, offsetWidth, offsetHeight);
      ctx.stroke();
    }
  }
}