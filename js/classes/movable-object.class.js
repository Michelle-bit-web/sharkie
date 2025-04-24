class MovableObject {
    x = 10;
    y = 180;
    img;
    width = 70;
    height = 90;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){
        console.log('Moving left');
    }
}