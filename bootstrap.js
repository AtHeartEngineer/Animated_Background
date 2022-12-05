import * as wasm from "./pkg/index_bg.wasm";
wasm.init_panic_hook();
document.body.style.margin = 0;
let canvas = document.getElementById("bg-canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let universe = wasm.universe_new(ctx);

const renderLoop = () => {
  debugger;
  wasm.universe_tick(universe).catch(console.error);
  requestAnimationFrame(renderLoop);
};

renderLoop();