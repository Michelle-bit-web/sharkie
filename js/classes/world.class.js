class World {
    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
        new JellyFish(),
        new JellyFish(),
    ];
    light = [
        new Light()
    ];
    water = [
        new Water()
    ];
    backgroundobjects = [
        new BackgroundObject('../assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/2. Floor/D1.png', 0),
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.water);
        this.addObjectsToMap(this.backgroundobjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.light);
        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame( () => this.draw());
    }
    addObjectsToMap(objects){
        objects.forEach(obj => this.addToMap(obj))
    }

    addToMap(mo) {
        if(mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}