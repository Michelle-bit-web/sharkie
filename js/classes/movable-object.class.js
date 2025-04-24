class MovableObject {
    x = 10;
    y = 180;
    img;
    width = 70;
    height = 90;
    imageCache = {};

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
        console.log('Moving left');
    }
}