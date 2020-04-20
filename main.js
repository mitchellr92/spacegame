const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules-container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

// Create ship props
const ship = {
  x: canvas.width / 2,
  y: canvas.height - 40,
  size: 10,
  speed: 4,
  dx: 0
};

// Create missile props
const missile = {
  x: canvas.width / 2,
  y: canvas.height - 40,
  size: 4,
  speed: 15,
  dy: -7
};

// Draw ship on canvas
function drawShip() {
  ctx.beginPath();
  ctx.arc(ship.x, ship.y, ship.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Draw missile on canvas
function drawMissile() {
  ctx.beginPath();
  ctx.arc(missile.x, missile.y, missile.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Draw everything
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawMissile();
  drawShip();
}

// Move missile on canvas
function moveMissile() {
  missile.y += missile.dy;
  requestAnimationFrame(moveMissile);
}

// Move ship on canvas
function moveShip() {
  ship.x += ship.dx;

  // Wall collision (right/left)
  if (ship.x + ship.size > canvas.width) {
    ship.x = canvas.width - ship.size;
  }

  if (ship.x < 0) {
    ship.x = 0;
  }
}

// Update canvas drawing and animation
function update() {
  moveShip();

  // Draw everything
  draw();

  requestAnimationFrame(update);
}

update();

function keyDown(e) {
  if (e.key === "a") {
    ship.dx = -ship.speed;
  } else if (e.key === "d") {
    ship.dx = ship.speed;
  } else if (e.key === "Enter") {
    console.log("Fire!");
    moveMissile();
  }
}

// Keyup event
function keyUp(e) {
  if (e.key === "a" || e.key === "d") {
    ship.dx = 0;
  }
}

// Event handlers
rulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
