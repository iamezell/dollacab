export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('loading', 'assets/sprites/loading.png');
    this.load.image('title', 'assets/sprites/title.png')
    this.load.image('playButton', 'assets/sprites/playbutton.png')
  }

  create() {  
    // this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    // this.add.image(100, 200, 'cokecan');
    this.scene.start('title-scene')
  }
}