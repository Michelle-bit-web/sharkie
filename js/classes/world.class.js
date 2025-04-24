class World {
    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
    ];
    light = [
        new Light()
    ];
    backgroundobjects = [
        new BackgroundObject('../assets/img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/2. Floor/D1.png', 0),
    ];
    canvas;
    ctx;
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundobjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.light);

        requestAnimationFrame( () => this.draw());
    }
    addObjectsToMap(objects){
        objects.forEach(obj => this.addToMap(obj))
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}