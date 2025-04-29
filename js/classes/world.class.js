class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    energyStatusbar = new Statusbar('energy', 20, 5);
    coinStatusbar = new Statusbar('coin', 20, 45);
    poisonStatusbar = new Statusbar('poison', 20, 85);
    throwableObjects = [];
    collectableObjects = [
        new CollectableObjects("coin", 200, 250),
        new CollectableObjects("coin", 250, 200),
        new CollectableObjects("coin", 300, 180),
        new CollectableObjects("coin", 350, 200),
        new CollectableObjects("coin", 400, 250),
        new CollectableObjects("poison", 100, 350),];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    
    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollision();
            this.checkThrowing();
        }, 100)
    }

    checkCollision(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hitByEnemyType = enemy;
                // console.log(enemy);
                // console.log(this.character.hitByEnemyType) //gibt den richtigen letzten Enemy aus
                this.character.hit();
                this.energyStatusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowing(){
        if(this.keyboard.THROW){
           let bubble = new ThrowableObject(this.character.x + this.character.width, this.character.y + this.character.height/2, this.keyboard);
            this.throwableObjects.push(bubble)
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // ---- place for fixed objects ----
        this.addToMap(this.energyStatusbar);
        this.addToMap(this.coinStatusbar);
        this.addToMap(this.poisonStatusbar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.collectableObjects);
        
        this.ctx.translate(-this.camera_x, 0);
        
        requestAnimationFrame( () => this.draw());
    }
    addObjectsToMap(objects){
        objects.forEach(obj => this.addToMap(obj));
    }

    addToMap(mo) {
        if(mo.otherDirection){
           this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        mo.drawOffsetFrame(this.ctx);
        if(mo.otherDirection){
           this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}