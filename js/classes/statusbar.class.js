class Statusbar extends DrawableObject{
    percentage = 100;
    type;
    images;

    IMAGES_ENERGY = [
        "../assets/img/4. Marcadores/orange/0_  copia.png",
        "../assets/img/4. Marcadores/orange/20_ copia 2.png",
        "../assets/img/4. Marcadores/orange/40_  copia.png",
        "../assets/img/4. Marcadores/orange/60_  copia.png",
        "../assets/img/4. Marcadores/orange/80_  copia.png",
        "../assets/img/4. Marcadores/orange/100_  copia.png",
    ];
    IMAGES_COIN = [
        "../assets/img/4. Marcadores/orange/0_  copia 2.png",
        "../assets/img/4. Marcadores/orange/20_  copia.png",
        "../assets/img/4. Marcadores/orange/40_  copia 2.png",
        "../assets/img/4. Marcadores/orange/60_  copia 2.png",
        "../assets/img/4. Marcadores/orange/80_  copia 2.png",
        "../assets/img/4. Marcadores/orange/100_ copia 2.png",
    ];
    IMAGES_POISON = [
        "../assets/img/4. Marcadores/orange/0_ copia.png",
        "../assets/img/4. Marcadores/orange/20_ copia.png",
        "../assets/img/4. Marcadores/orange/40_ copia.png",
        "../assets/img/4. Marcadores/orange/60_ copia.png",
        "../assets/img/4. Marcadores/orange/80_ copia.png",
        "../assets/img/4. Marcadores/orange/100_ copia.png",
    ];

    constructor(type, x, y){
        super();
        this.x = x;
        this.y = y;
        this.type = type;
        this.width = 250;
        this.height = 50;
        this.loadTypeImages();
        this.setPercentage(100);
    }

    loadTypeImages(){
        if(this.type == "energy"){
            this.images = this.IMAGES_ENERGY;
        }else if(this.type == "coin"){
            this.images = this.IMAGES_COIN;
        }else if(this.type == "poison"){
            this.images = this.IMAGES_POISON;
        };
        this.loadImages(this.images);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if(this.percentage == 100){
            return 5
        }else if(this.percentage > 80){
            return 4
        }else if(this.percentage > 60){
            return 3
        }else if(this.percentage > 40){
            return 2
        }else if(this.percentage > 20){
            return 1
        }else{
            return 0
        }

    }
}