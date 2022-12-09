import * as wasm from "./pkg/index_bg.wasm";
wasm.init_panic_hook();
document.body.style.margin = 0;
let canvas = document.getElementById("bg-canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//ctx.fillStyle = "black";
//ctx.fillRect(0, 0, canvas.width, canvas.height);
let universe = wasm.universe_new();

addEventListener("resize", (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  universe = wasm.universe_new();
});

let currentTime = 0;
let lastTime = 0;
const fps = () => {
  currentTime = new Date();
  const _fps = 1000 / (currentTime - lastTime);
  lastTime = currentTime;
  ctx.font = "24px serif";
  ctx.textAlign = "right";
  ctx.fillText(_fps.toFixed(2), window.innerWidth - 50, 50);
}

const renderLoop = () => {
  //debugger;

  wasm.universe_tick(universe);
  fps();
  requestAnimationFrame(renderLoop);

};

renderLoop();