const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules-container");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;

// Event handlers
rulesBtn.addEventListener("click", () => {
  console.log("click");
  rules.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});
