// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = (83 - 35);
    this.speed = 0;
    var rnd = Math.random();
    if(rnd < 0.33) {
        this.y = (83 - 35);
    } else if (rnd >= 0.33 && rnd < 0.66) {
        this.y = (83 - 35) + 83;
    } else {
        this.y = (83 - 35) + (83 * 2);
    }
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {
    this.x = 0 + (101 * 2);
    this.y = (83 - 35) + (83 * 4);
    this.sprite = 'images/char-boy.png';
}
    player.prototype.update = function(dt) {
        
    };

    player.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    player.prototype.handleInput = function(keyCode){
        switch (keyCode) {
            case "left":
                console.log("Left");
                player.x -= 101;
                break;
            case "right":
                console.log("right");
                player.x += 101;
                break;
            case "up":
                console.log("up");
                player.y -= 83;
                break;
            case "down":
                console.log("down");
                player.y += 83;
                break;
            default:
                break;
        }
    }


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var allEnemies = [enemy1];
var player = new player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
