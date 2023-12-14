// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Platform from './platform.js';
import Collectible from './collectible.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {
  
  // Define the constructor for this class, which takes one argument for the canvas ID
  constructor(canvasId) {
    // Call the constructor of the superclass (Game) with the canvas ID
    super(canvasId);
    
    // Create a player object and add it to the game
    const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);
    this.addGameObject(player);
    
    // Add the player UI object to the game
    this.addGameObject(new PlayerUI(10, 10));

    // Set the game's camera target to the player
    this.camera.target = player;

    // Define the platform's width and the gap between platforms
    const platformWidth = 20;
    const platformHeight = this.canvas.height; 

    // Create platforms and add them to the game
    const platforms = [
      new Platform(0, this.canvas.height - 20, 2000, 20), // Bottom border
      new Platform(0, 0, 2000, 20),  //Top Border
      new Platform(0, 0, platformWidth, platformHeight), // Left border
      new Platform(this.canvas.width - platformWidth, 0, platformWidth, platformHeight), // Right border

    ];
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create collectibles and add them to the game
    this.addGameObject(new Collectible(250, this.canvas.height - 100, 20, 20));
  
  }
  
}

// Export the Level class as the default export of this module
export default Level;
