/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pkg/index_bg.wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nconst DRAW_FPS = false;\n\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './pkg/index_bg.wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\ndocument.body.style.margin = 0;\nlet canvas = document.getElementById(\"bg-canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nlet universe = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pkg/index_bg.wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\naddEventListener(\"resize\", (event) => {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  universe = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pkg/index_bg.wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n});\n\nlet currentTime = 0;\nlet lastTime = 0;\nlet rollingAverage = Array(15).fill(100); // avg framerate over 15 frames, initialized to 100 fps\nconst fps = () => {\n  currentTime = new Date();\n  const _fps = 1000 / (currentTime - lastTime);\n  rollingAverage.push(_fps);\n  rollingAverage.shift();\n  const _avgFPS = rollingAverage.reduce((a, b) => a + b) / rollingAverage.length;\n  lastTime = currentTime;\n  ctx.font = \"24px serif\";\n  ctx.textAlign = \"right\";\n  ctx.fillStyle = \"red\";\n  ctx.fillText(_avgFPS.toFixed(0), canvas.width - 50, 50);\n}\n\nconst renderLoop = () => {\n  // Pauses when tab is not active\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './pkg/index_bg.wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(universe);\n  if (DRAW_FPS) { fps(); }\n  requestAnimationFrame(renderLoop);\n};\n\nrenderLoop();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ib290c3RyYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEM7QUFDNUM7O0FBRUEsa0pBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrSkFBaUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0pBQWlCO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0pBQWtCO0FBQ3BCLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYm9vdHN0cmFwLmpzP2RmODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9wa2cvaW5kZXhfYmcud2FzbVwiO1xuY29uc3QgRFJBV19GUFMgPSBmYWxzZTtcblxud2FzbS5pbml0X3BhbmljX2hvb2soKTtcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLWNhbnZhc1wiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbmN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xubGV0IHVuaXZlcnNlID0gd2FzbS51bml2ZXJzZV9uZXcoKTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHVuaXZlcnNlID0gd2FzbS51bml2ZXJzZV9uZXcoKTtcbn0pO1xuXG5sZXQgY3VycmVudFRpbWUgPSAwO1xubGV0IGxhc3RUaW1lID0gMDtcbmxldCByb2xsaW5nQXZlcmFnZSA9IEFycmF5KDE1KS5maWxsKDEwMCk7IC8vIGF2ZyBmcmFtZXJhdGUgb3ZlciAxNSBmcmFtZXMsIGluaXRpYWxpemVkIHRvIDEwMCBmcHNcbmNvbnN0IGZwcyA9ICgpID0+IHtcbiAgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBfZnBzID0gMTAwMCAvIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKTtcbiAgcm9sbGluZ0F2ZXJhZ2UucHVzaChfZnBzKTtcbiAgcm9sbGluZ0F2ZXJhZ2Uuc2hpZnQoKTtcbiAgY29uc3QgX2F2Z0ZQUyA9IHJvbGxpbmdBdmVyYWdlLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gcm9sbGluZ0F2ZXJhZ2UubGVuZ3RoO1xuICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xuICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgY3R4LmZpbGxUZXh0KF9hdmdGUFMudG9GaXhlZCgwKSwgY2FudmFzLndpZHRoIC0gNTAsIDUwKTtcbn1cblxuY29uc3QgcmVuZGVyTG9vcCA9ICgpID0+IHtcbiAgLy8gUGF1c2VzIHdoZW4gdGFiIGlzIG5vdCBhY3RpdmVcbiAgd2FzbS51bml2ZXJzZV90aWNrKHVuaXZlcnNlKTtcbiAgaWYgKERSQVdfRlBTKSB7IGZwcygpOyB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJMb29wKTtcbn07XG5cbnJlbmRlckxvb3AoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./bootstrap.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./bootstrap.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;