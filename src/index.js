import Phaser from 'phaser';
// import logoImg from './assets/logo.png';
import Grizzly from './assets/grizzlybear.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.image('logo', logoImg);
        this.load.image('grizzlybear', Grizzly);
    }
      
    create ()
    {
        const grizzly = this.add.sprite(400, 400, 'grizzlybear');
        
        grizzly.setScale(.25);
        // const logo = this.add.image(400, 150, 'logo');
      
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#add8e6',
    scene: MyGame
};

const game = new Phaser.Game(config);
