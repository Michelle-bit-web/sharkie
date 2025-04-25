class Level {
  enemies;
  backgroundObjects;

  constructor(enemies, backgroundObjectsTemplate) {
    this.enemies = enemies;
    this.backgroundObjects = this.collectBgImages(backgroundObjectsTemplate);
  }

  collectBgImages(pathTemplate) {
    let result = [];

    for (let i = 0; i <= 4; i++) {
      let position = 719 * i;
      let number = i % 2 === 1 ? 1 : 2;
      result.push(
        new BackgroundObject(`${pathTemplate}/5. Water/D${number}.png`, position),
        new BackgroundObject(`${pathTemplate}/4.Fondo 2/D${number}.png`, position),
        new BackgroundObject(`${pathTemplate}/3.Fondo 1/D${number}.png`, position),
        new BackgroundObject(`${pathTemplate}/2. Floor/D${number}.png`, position),
        new BackgroundObject(`${pathTemplate}/1. Light/${number}.png`, position)
      );
    };
    return result;
  }
}

// collectBgImages(){
//     for (let i = 0; i <= 4; i++) {
//         let position = 719 * i;
//         let number = i % 2 === 1 ? 1 : 2;
//         this.backgroundObjects.push(
//             new BackgroundObject(`../assets/img/3. Background/Layers/5. Water/D${number}.png`, position),
//             new BackgroundObject(`../assets/img/3. Background/Layers/4.Fondo 2/D${number}.png`, position),
//             new BackgroundObject(`../assets/img/3. Background/Layers/3.Fondo 1/D${number}.png`, position),
//             new BackgroundObject(`../assets/img/3. Background/Layers/2. Floor/D${number}.png`, position),
//             new BackgroundObject(`../assets/img/3. Background/Layers/1. Light/${number}.png`, position),
//         )
//     }
// }
