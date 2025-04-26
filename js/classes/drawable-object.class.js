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
}