class ThrowableObject extends MovableObject{
    IMAGE_BUBBLE = "../assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"; 
    IMAGES_BUBBLE_POISON = "../assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"; 
    keyboard;

    constructor(x, y, keyboard){
        super().loadImage( "../assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.loadImage( "../assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.keyboard = keyboard;
        this.x = x;
        this.y = y;
        this.height = 30;
        this.width = 30;
        this.animate();
        this.throw();
    }

    animate(){
        // if(this.keyboard.THROW){
        //     this.playAnimation( "../assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
            this.moveUp();
        // }      
    }

    throw(){
        this.speedY = 3;
        this.applyGravity();
        setInterval(() => this.x += 5, 25);
    }
}