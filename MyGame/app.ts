class MyGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }

    game: Phaser.Game;

    moveRight: Phaser.Key = new Phaser.Key(this.game, Phaser.KeyCode.D);

    preload() {
        this.game.load.image('logo', 'phaser2.png');
        //this.game.load.image('brekOut_Sprite_sheet', 'breakout_sprites.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');

        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);

        this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);

        //var player: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'brekOut_Sprite_sheet');

    }

    update() {

        if ()
        { }
    }

}

window.onload = () => {

    var game = new MyGame();

};