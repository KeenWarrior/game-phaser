class PlayScene extends Phaser.Scene{

    constructor(){
        super({key : "play"});
    }

    preload(){
        this.load.image("tile_image", "assets/jungle tileset.png");
        this.load.tilemapTiledJSON("map", "assets/game_map.json");
        // this.load.spritesheet('run_sheet', 'assets/run.png', {frameWidth : 21, frameHeight : 33});

    }

    create(){
        
        // this.player = this.add.sprite(100, 100, 'run_sheet');

        var map = this.add.tilemap("map");


    }
}