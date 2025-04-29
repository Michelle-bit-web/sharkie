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
        this.width = 200;
        this.height = 50;
        this.loadTypeImages();
        if(this.type == "energy"){
            this.setPercentage(100);
        } else {
            this.setPercentage(0);
        }
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
        if(this.type == "coin"){
            this.coins = percentage;
        }else if(this.type == "poison"){
            this.bottles = percentage;
        }else{
            this.percentage = percentage;
        }
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        let value = this.type === 'energy' ? this.percentage : (this.type === 'coin' ? this.coins : this.bottles);
        if (value >= 100 || value === 5) return 5;
        else if (value >= 80 || value === 4) return 4;
        else if (value >= 60 || value === 3) return 3;
        else if (value >= 40 || value === 2) return 2;
        else if (value >= 20 || value === 1) return 1;
        else return 0;
    }
}