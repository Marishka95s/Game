var game = new Phaser.Game(800, 600, Phaser.AUTO);
var GameState = {
    init: function(){

    },
    preload: function(){
        this.load.image('bg', 'img/bg0.jpg');
    },
    create: function(){
        this.add.image(10, 30, 'bg').setOrigin(0, 0);
    },
    update: function(){

    },
    end: function(){

    },
};

game.state.add('GameState', GameState);
game.state.start('GameState')