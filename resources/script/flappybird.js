const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

// Game constants
const BIRD_WIDTH = 30;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 100;
const PIPE_SPEED = 2;
const GRAVITY = 0.2;

// Game variables
let birdX = 50;
let birdY = 250;
let birdVelocity = 0;
let score = 0;
let gameOver = false;

// Pipe objects
let pipes = [];

// Bird object
let bird = {
  x: birdX,
  y: birdY,
  width: BIRD_WIDTH,
  height: BIRD_HEIGHT,
  velocity: birdVelocity,
  gravity: GRAVITY,
  jump: function() {
    this.velocity = -5;
  },
  update: function() {
    this.y += this.velocity;
    this.velocity += this.gravity;
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
      this.velocity = 0;
    }
  },
  draw: function() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

// Pipe object
function Pipe(x, y) {
  this.x = x;
  this.y = y;
  this.width = PIPE_WIDTH;
  this.height = PIPE_GAP;
  this.speed = PIPE_SPEED;
  this.draw = function() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.update = function() {
    this.x -= this.speed;
  };
}

// Game loop
function update() {
  if (gameOver) return; // Exit game loop when game is over
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update bird
  bird.update();
  bird.draw();
  
  // Update pipes
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].draw();
    
    // Check collision with pipes
    if (checkCollision(bird, pipes[i])) {
      gameOver = true;
    }
  }
  
  // Add new pipes
  if (Math.random() < 0.1) {
    const pipeY = Math.random() * (canvas.height - PIPE_GAP);
    const pipeX = canvas.width;
    pipes.push(new Pipe(pipeX, pipeY));
  }
  
  // Update score
  score++;
  scoreElement.textContent = `Score: ${score}`;
  
  // Draw score
  ctx.font = '24px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`Score: ${score}`, 10, 10);
  
  // Check game over
  if (gameOver) {
    ctx.font = '48px Arial';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
  } else {
    requestAnimationFrame(update);
  }
}

// Check collision between bird and pipe
function checkCollision(bird, pipe) {
  if (bird.x + bird.width > pipe.x &&
      bird.x < pipe.x + pipe.width &&
      (bird.y < pipe.y || bird.y + bird.height > pipe.y + pipe.height)) {
    return true;
  }
  return false;
}

// Handle user input
document.addEventListener('keydown', function(event) {
  if (event.key === ' ') {
    bird.jump();
  }
});

// Start game
update();