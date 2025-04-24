class Character extends MovableObject{
    width = 150;
    height = 200;
    y = 130;
    constructor(){
        super().loadImage('../assets/img/1.Sharkie/3.Swim/1.png')
        this.loadImages([
            '../assets/img/1.Sharkie/3.Swim/1.png',
            '../assets/img/1.Sharkie/3.Swim/2.png',
            '../assets/img/1.Sharkie/3.Swim/3.png',
            '../assets/img/1.Sharkie/3.Swim/4.png',
            '../assets/img/1.Sharkie/3.Swim/5.png',
            '../assets/img/1.Sharkie/3.Swim/6.png',
        ]);
    }
    
    jump(){
        
    }
}