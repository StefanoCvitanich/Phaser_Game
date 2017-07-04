var MyGame = (function () {
    function MyGame() {
        this.moveRight = new Phaser.Key(this.game, Phaser.KeyCode.D);
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    MyGame.prototype.preload = function () {
        this.game.load.image('logo', 'phaser2.png');
        //this.game.load.image('brekOut_Sprite_sheet', 'breakout_sprites.png');
    };
    MyGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);
        this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
        //var player: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'brekOut_Sprite_sheet');
    };
    MyGame.prototype.update = function () {
        if () { }
    };
    return MyGame;
}());
window.onload = function () {
    var game = new MyGame();
};
//# sourceMappingURL=app.js.map