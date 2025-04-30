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
    collectableObjects = [];

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
        this.level.enemies.forEach(enemy => enemy.world = this);
    }

    run(){
        setInterval(() => {
            this.checkCollision();
            this.checkThrowing();
            this.checkCharacterDistance();
        }, 100);
    }

    checkCollision(){
       this.checkCollisionEnemies();
       this.checkCollisionCollectables();
    }

    checkCollisionEnemies(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hitByEnemyType = enemy;
                // console.log(enemy);
                // console.log(this.character.hitByEnemyType) //gibt den richtigen letzten Enemy aus
                this.character.hit(enemy);
                this.changeStatusbar(this.energyStatusbar, -20);
                // this.energyStatusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionCollectables(){
      this.collectableObjects.forEach((item, index) => {
        if(this.character.isColliding(item)){
            if(item.imageType == "coin"){
                this.changeStatusbar(this.coinStatusbar, 1);
            }else if(item.imageType == "poison"){
                this.changeStatusbar(this.poisonStatusbar, 1);
            };
            this.collectableObjects.splice(index, 1);
        };
      });
    }

    changeStatusbar(statusbar, direction){
        if (statusbar.type === 'energy') {
            statusbar.setPercentage(Math.max(0, statusbar.percentage + direction)); // z. B. -20 bei Schaden
        } else {
            let current = statusbar.type === 'coin' ? this.character.coins : this.character.bottles;
            current = Math.max(0, Math.min(current + direction, 5)); // Begrenzung auf 0–5
           
            if (statusbar.type === 'coin') {
                this.character.coins = current;
            } else {
                this.character.bottles = current;
            }
            statusbar.setPercentage(current);
        }
    }

    checkThrowing(){
        if(this.keyboard.THROW){
           let bubble = new ThrowableObject(this.character.x + this.character.width, this.character.y + this.character.height/2, this.keyboard);
            this.throwableObjects.push(bubble);
            this.changeStatusbar(this.poisonStatusbar, -1);
        }
    }

    checkCharacterDistance(){
        const treshold = [0, 200, 800, 1200];
        treshold.forEach((treshold, index) => {
            if(this.character.x > treshold && !this[`collectableObjectsGenerated${index}`]){
                this.generateNewCollectable();
                this[`collectableObjectsGenerated${index}`] = true;
                this.checkEndbossAnimation(index);
            };
        });
    }

    checkEndbossAnimation(index){
        this.level.enemies.forEach(enemy =>{
            if(enemy instanceof Endboss && index === 3){
                enemy.startShowUp();
            }
        })
    }

    generateNewCollectable(){
        this.collectableObjects.push(
         new CollectableObjects("coin", this.character.x + 120, this.character.y + 150),
         new CollectableObjects("coin", this.character.x + 180, this.character.y + 100),
         new CollectableObjects("coin", this.character.x + 240, this.character.y + 100),
         new CollectableObjects("coin", this.character.x + 300, this.character.y + 150),
         new CollectableObjects("coin", this.character.x + 300, this.character.y + 150),
         new CollectableObjects("poison", this.character.x + 120 , this.character.y +  300),
        );
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
        objects.forEach(obj => {
            if (!(obj instanceof Endboss) || obj.visible) {
                this.addToMap(obj);
            }
        });
    }

    addToMap(mo) {
        if(mo.otherDirection){
           this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
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