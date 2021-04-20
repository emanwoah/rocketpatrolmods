// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this); // add to existing scene
      this.isFiring = false; // track rocket
      this.moveSpeed = 1.75; // movement speed
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add sound effect
    }
  
    update() {
        //left and right movement
        if(!this.isFiring) {
            if(keyJ.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }
            else if(keyL.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyH) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
        //fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        //resets on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
      }
      
      //reset rocket
      reset() {
          this.isFiring = false;
          this.y = game.config.height - borderPadding- borderUISize;
      }
  }