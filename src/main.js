let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

//Set UI Sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyE, keyA, keyD, keyH, keyJ, keyL, keyLEFT, keyRIGHT;
