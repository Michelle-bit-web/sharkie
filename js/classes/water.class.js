class Water extends MovableObject {
    y = 0;
    x = 0;
    height = 480;
    width = 720;
    constructor(){
        super().loadImage('../assets/img/3. Background/Layers/5. Water/D1.png');
        // this.animate();
    }

    // animate(){
    //     setInterval(() => {
    //         this.x -= 0.4;
    //     }, 1000 / 60);
    // }
}