import 'phaser';

import { SimpleScene } from './scenes/simple-scene';
import { titleScene } from './scenes/title-scene';

const gameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [SimpleScene, titleScene]
};

new Phaser.Game(gameConfig);