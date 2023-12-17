import GameObject from '../engine/gameobject.js';
import UI from '../engine/ui.js';
import Player from './player.js';

// The PlayerUI class extends GameObject.
class PlayerUI extends GameObject {
  constructor(x, y) {
    super(x, y); // Call the constructor of the GameObject class.

    // Create a new UI component with initial text and add it to this object's components.
    this.uiComponent = new UI('Time: 60s Coins: 0/3', x, y);
    this.addComponent(this.uiComponent);
  }

  // The update method is called every frame.
  update(deltaTime) {
    // Find the player object in the game's gameObjects array.
    const player = this.game.gameObjects.find((obj) => obj instanceof Player);

    // Update the text of the UI component to reflect the player's current score.
    this.uiComponent.setText(`Time: ${this.game.timeRemaining}s Coins: ${this.game.collectedCollectibles}/3`);
    
  }
}

export default PlayerUI; 