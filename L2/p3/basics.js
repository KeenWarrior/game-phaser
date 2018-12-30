class FirstScene extends Phaser.Scene {

preload() {
  this.load.image("tiles", "assets/jungle_tileset.png");
  this.load.tilemapTiledJSON("map", "assets/game_map.json");
}



create() {
  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
  const map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
  const tileset = map.addTilesetImage("jungle_tileset", "tiles");

  // Parameters: layer name (or index) from Tiled, tileset, x, y
  var layer = map.createStaticLayer("Help", tileset, 0, 0);

  console.log(map)
  layer.scaleX = 2;
  layer.scaleY = 2;
  console.log(layer)
}
}