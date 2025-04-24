class Light extends MovableObject{
    y = 0;
    x = 0;
    height = 480;
    width = 720;
    constructor(){
        super().loadImage('../assets/img/3. Background/Layers/1. Light/1.png');
        // this.animate();
    }

    // animate(){
    //     setInterval(() => {
    //         this.x -= 0.1;
    //     }, 1000 / 60);
    // }
}
