import * as wasm from "./docs/index_bg.wasm";
const DRAW_FPS = false;

wasm.init_panic_hook();
document.body.style.margin = 0;
let canvas = document.getElementById("bg-canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let universe = wasm.universe_new();

addEventListener("resize", (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  universe = wasm.universe_new();
});

let currentTime = 0;
let lastTime = 0;
let rollingAverage = Array(15).fill(100); // avg framerate over 15 frames, initialized to 100 fps
const fps = () => {
  currentTime = new Date();
  const _fps = 1000 / (currentTime - lastTime);
  rollingAverage.push(_fps);
  rollingAverage.shift();
  const _avgFPS = rollingAverage.reduce((a, b) => a + b) / rollingAverage.length;
  lastTime = currentTime;
  ctx.font = "24px serif";
  ctx.textAlign = "right";
  ctx.fillStyle = "red";
  ctx.fillText(_avgFPS.toFixed(0), canvas.width - 50, 50);
}

const renderLoop = () => {
  // Pauses when tab is not active
  wasm.universe_tick(universe);
  if (DRAW_FPS) { fps(); }
  requestAnimationFrame(renderLoop);
};

renderLoop();