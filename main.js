const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules-container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

const ship = {
  x: canvas.width / 2,
  y: canvas.height - 40,
  size: 10,
  speed: 8,
  dx: 0
};

// Draw ship on canvas
function drawShip() {
  ctx.beginPath();
  ctx.arc(ship.x, ship.y, ship.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Draw everything
function draw() {
  drawShip();
}

// Move ship on canvas
function moveShip() {
  ship.x += ship.dx;

  // Wall detection
  if (ship.x + ship.size > canvas.width) {
    ship.x = canvas.width - ship.size;
  }

  if (ship.x < 0) {
    ship.x = 0;
  }
}

// Keydown event
function keyDown(e) {
  if (e.key === "a") {
    ship.dx = -ship.speed;
  } else if (e.key === "d") {
    ship.dx = ship.speed;
  } else if (e.key === " ") {
    console.log("space");
  }
}

// Keyup event
function keyUp(e) {
  if (e.key === "a" || e.key === "d") {
    ship.dx = 0;
  }
}

// Update canvas drawing and animation
function update() {
  moveShip();

  draw();

  requestAnimationFrame(update);
}

update();

// Event handlers
rulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
