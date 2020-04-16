const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules-container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

const ship = {
  x: canvas.width / 2,
  y: canvas.height / 2,
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

draw();

// Event handlers
rulesBtn.addEventListener("click", () => {
  console.log("click");
  rules.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});
