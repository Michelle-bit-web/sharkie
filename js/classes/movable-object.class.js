class MovableObject {
    x = 10;
    y = 10;
    img;
    width = 70;
    height = 100;

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