class MovableObject {
    x = 10;
    y = 180;
    img;
    width = 70;
    height = 90;
    speed = 0.25;
    currentImage = 0;
    imageCache = {};
    otherDirection = false;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){
        setInterval(() =>{
            this.x -= this.speed;
        }, 1000 / 60)
    }

    moveUp(){
        setInterval(() =>{
            this.y -= this.speed;
        }, 1000 / 60)
    }
}