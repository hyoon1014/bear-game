import Phaser from 'phaser';
// import logoImg from './assets/logo.png';
import Grizzly from './assets/grizzlybear.png';

import PolarBear from './assets/polarbearfam.png';

import Music from './assets/jazzcomedy.mp3';

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
        this.load.image('polarbear', PolarBear);
        this.load.audio('thememusic', Music);

    }
      
    create ()
    {
        const grizzly = this.add.sprite(400, 400, 'grizzlybear');
        
        grizzly.setScale(.25);
        
        const helloButton = this.add.text(350, 200, "Hello, I\'m a grizzly bear!", {fill: 0x83a1a7});

        const polarBear = this.add.sprite(700, 75, 'polarbear');

        polarBear.setScale(.20);

        const music = this.sound.add('thememusic');

        // if (!this.sound.locked)
        // {
        //     music.play()
        // }
        // else
        // {
        //     this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
        //         music.play()
        //     })
        // }
        // music.onDecoded.add(start, this);


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

// function start() {

//     music.fadeIn(4000);

// }

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#add8e6',
    scene: MyGame
};

const game = new Phaser.Game(config);
