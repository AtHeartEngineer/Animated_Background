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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg/index_bg.wasm */ \"./pkg/index_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst DRAW_FPS = false;\n\n_pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.init_panic_hook();\ndocument.body.style.margin = 0;\nlet canvas = document.getElementById(\"bg-canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nlet universe = _pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new();\n\naddEventListener(\"resize\", (event) => {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  universe = _pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new();\n});\n\nlet currentTime = 0;\nlet lastTime = 0;\nlet rollingAverage = Array(15).fill(100); // avg framerate over 15 frames, initialized to 100 fps\nconst fps = () => {\n  currentTime = new Date();\n  const _fps = 1000 / (currentTime - lastTime);\n  rollingAverage.push(_fps);\n  rollingAverage.shift();\n  const _avgFPS = rollingAverage.reduce((a, b) => a + b) / rollingAverage.length;\n  lastTime = currentTime;\n  ctx.font = \"24px serif\";\n  ctx.textAlign = \"right\";\n  ctx.fillStyle = \"red\";\n  ctx.fillText(_avgFPS.toFixed(0), canvas.width - 50, 50);\n}\n\nconst renderLoop = () => {\n  // Pauses when tab is not active\n  _pkg_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(universe);\n  if (DRAW_FPS) { fps(); }\n  requestAnimationFrame(renderLoop);\n};\n\nrenderLoop();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ib290c3RyYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFDNUM7O0FBRUEsK0RBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0REFBaUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNERBQWlCO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkRBQWtCO0FBQ3BCLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib290c3RyYXAuanM/ZGY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3BrZy9pbmRleF9iZy53YXNtXCI7XG5jb25zdCBEUkFXX0ZQUyA9IGZhbHNlO1xuXG53YXNtLmluaXRfcGFuaWNfaG9vaygpO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAwO1xubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmctY2FudmFzXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5sZXQgdW5pdmVyc2UgPSB3YXNtLnVuaXZlcnNlX25ldygpO1xuXG5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdW5pdmVyc2UgPSB3YXNtLnVuaXZlcnNlX25ldygpO1xufSk7XG5cbmxldCBjdXJyZW50VGltZSA9IDA7XG5sZXQgbGFzdFRpbWUgPSAwO1xubGV0IHJvbGxpbmdBdmVyYWdlID0gQXJyYXkoMTUpLmZpbGwoMTAwKTsgLy8gYXZnIGZyYW1lcmF0ZSBvdmVyIDE1IGZyYW1lcywgaW5pdGlhbGl6ZWQgdG8gMTAwIGZwc1xuY29uc3QgZnBzID0gKCkgPT4ge1xuICBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IF9mcHMgPSAxMDAwIC8gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpO1xuICByb2xsaW5nQXZlcmFnZS5wdXNoKF9mcHMpO1xuICByb2xsaW5nQXZlcmFnZS5zaGlmdCgpO1xuICBjb25zdCBfYXZnRlBTID0gcm9sbGluZ0F2ZXJhZ2UucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyByb2xsaW5nQXZlcmFnZS5sZW5ndGg7XG4gIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XG4gIGN0eC5mb250ID0gXCIyNHB4IHNlcmlmXCI7XG4gIGN0eC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBjdHguZmlsbFRleHQoX2F2Z0ZQUy50b0ZpeGVkKDApLCBjYW52YXMud2lkdGggLSA1MCwgNTApO1xufVxuXG5jb25zdCByZW5kZXJMb29wID0gKCkgPT4ge1xuICAvLyBQYXVzZXMgd2hlbiB0YWIgaXMgbm90IGFjdGl2ZVxuICB3YXNtLnVuaXZlcnNlX3RpY2sodW5pdmVyc2UpO1xuICBpZiAoRFJBV19GUFMpIHsgZnBzKCk7IH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckxvb3ApO1xufTtcblxucmVuZGVyTG9vcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./bootstrap.js\n");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"__wbg_arc_30e550c408f151ac\": () => (/* binding */ __wbg_arc_30e550c408f151ac),\n/* harmony export */   \"__wbg_beginPath_4e91b7092d0d33d9\": () => (/* binding */ __wbg_beginPath_4e91b7092d0d33d9),\n/* harmony export */   \"__wbg_call_97ae9d8645dc388b\": () => (/* binding */ __wbg_call_97ae9d8645dc388b),\n/* harmony export */   \"__wbg_closePath_d0ab75d4def749a2\": () => (/* binding */ __wbg_closePath_d0ab75d4def749a2),\n/* harmony export */   \"__wbg_document_3ead31dbcad65886\": () => (/* binding */ __wbg_document_3ead31dbcad65886),\n/* harmony export */   \"__wbg_error_f851667af71bcfc6\": () => (/* binding */ __wbg_error_f851667af71bcfc6),\n/* harmony export */   \"__wbg_fillRect_c7a19e13c5242507\": () => (/* binding */ __wbg_fillRect_c7a19e13c5242507),\n/* harmony export */   \"__wbg_getContext_4d5e97892c1b206a\": () => (/* binding */ __wbg_getContext_4d5e97892c1b206a),\n/* harmony export */   \"__wbg_getElementById_3a708b83e4f034d7\": () => (/* binding */ __wbg_getElementById_3a708b83e4f034d7),\n/* harmony export */   \"__wbg_globalThis_7f206bda628d5286\": () => (/* binding */ __wbg_globalThis_7f206bda628d5286),\n/* harmony export */   \"__wbg_global_ba75c50d1cf384f4\": () => (/* binding */ __wbg_global_ba75c50d1cf384f4),\n/* harmony export */   \"__wbg_innerHeight_f4804c803fcf02b0\": () => (/* binding */ __wbg_innerHeight_f4804c803fcf02b0),\n/* harmony export */   \"__wbg_innerWidth_ffa584f74d721fce\": () => (/* binding */ __wbg_innerWidth_ffa584f74d721fce),\n/* harmony export */   \"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622\": () => (/* binding */ __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622),\n/* harmony export */   \"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089\": () => (/* binding */ __wbg_instanceof_HtmlCanvasElement_97761617af6ea089),\n/* harmony export */   \"__wbg_instanceof_Window_acc97ff9f5d2c7b4\": () => (/* binding */ __wbg_instanceof_Window_acc97ff9f5d2c7b4),\n/* harmony export */   \"__wbg_new_abda76e883ba8a5f\": () => (/* binding */ __wbg_new_abda76e883ba8a5f),\n/* harmony export */   \"__wbg_newnoargs_b5b063fc6c2f0376\": () => (/* binding */ __wbg_newnoargs_b5b063fc6c2f0376),\n/* harmony export */   \"__wbg_random_656f2ae924b2540e\": () => (/* binding */ __wbg_random_656f2ae924b2540e),\n/* harmony export */   \"__wbg_self_6d479506f72c6a71\": () => (/* binding */ __wbg_self_6d479506f72c6a71),\n/* harmony export */   \"__wbg_setfillStyle_53ccf2a9886c1c4d\": () => (/* binding */ __wbg_setfillStyle_53ccf2a9886c1c4d),\n/* harmony export */   \"__wbg_setstrokeStyle_899ea3720dae323b\": () => (/* binding */ __wbg_setstrokeStyle_899ea3720dae323b),\n/* harmony export */   \"__wbg_stack_658279fe44541cf6\": () => (/* binding */ __wbg_stack_658279fe44541cf6),\n/* harmony export */   \"__wbg_stroke_85dee7d87c4a6ead\": () => (/* binding */ __wbg_stroke_85dee7d87c4a6ead),\n/* harmony export */   \"__wbg_window_f2557cc78490aceb\": () => (/* binding */ __wbg_window_f2557cc78490aceb),\n/* harmony export */   \"__wbindgen_debug_string\": () => (/* binding */ __wbindgen_debug_string),\n/* harmony export */   \"__wbindgen_is_undefined\": () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   \"__wbindgen_number_get\": () => (/* binding */ __wbindgen_number_get),\n/* harmony export */   \"__wbindgen_object_clone_ref\": () => (/* binding */ __wbindgen_object_clone_ref),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"init_panic_hook\": () => (/* binding */ init_panic_hook)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nlet cachedFloat64Memory0 = new Float64Array();\n\nfunction getFloat64Memory0() {\n    if (cachedFloat64Memory0.byteLength === 0) {\n        cachedFloat64Memory0 = new Float64Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedFloat64Memory0;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nfunction init_panic_hook() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.init_panic_hook();\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Universe {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new();\n        return Universe.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    */\n    reset_canvas() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_reset_canvas(this.ptr);\n    }\n}\n\nfunction __wbindgen_number_get(arg0, arg1) {\n    const obj = getObject(arg1);\n    const ret = typeof(obj) === 'number' ? obj : undefined;\n    if (!isLikeNone(ret)) {\n        _assertNum(ret);\n    }\n    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;\n    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_instanceof_Window_acc97ff9f5d2c7b4() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof Window;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_document_3ead31dbcad65886() { return logError(function (arg0) {\n    const ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_innerWidth_ffa584f74d721fce() { return handleError(function (arg0) {\n    const ret = getObject(arg0).innerWidth;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_innerHeight_f4804c803fcf02b0() { return handleError(function (arg0) {\n    const ret = getObject(arg0).innerHeight;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_getElementById_3a708b83e4f034d7() { return logError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof CanvasRenderingContext2D;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_setstrokeStyle_899ea3720dae323b() { return logError(function (arg0, arg1) {\n    getObject(arg0).strokeStyle = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_setfillStyle_53ccf2a9886c1c4d() { return logError(function (arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_beginPath_4e91b7092d0d33d9() { return logError(function (arg0) {\n    getObject(arg0).beginPath();\n}, arguments) };\n\nfunction __wbg_stroke_85dee7d87c4a6ead() { return logError(function (arg0) {\n    getObject(arg0).stroke();\n}, arguments) };\n\nfunction __wbg_arc_30e550c408f151ac() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {\n    getObject(arg0).arc(arg1, arg2, arg3, arg4, arg5);\n}, arguments) };\n\nfunction __wbg_closePath_d0ab75d4def749a2() { return logError(function (arg0) {\n    getObject(arg0).closePath();\n}, arguments) };\n\nfunction __wbg_fillRect_c7a19e13c5242507() { return logError(function (arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n}, arguments) };\n\nfunction __wbg_instanceof_HtmlCanvasElement_97761617af6ea089() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof HTMLCanvasElement;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_getContext_4d5e97892c1b206a() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_newnoargs_b5b063fc6c2f0376() { return logError(function (arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_call_97ae9d8645dc388b() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_7f206bda628d5286() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_6d479506f72c6a71() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_f2557cc78490aceb() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_ba75c50d1cf384f4() { return handleError(function () {\n    const ret = __webpack_require__.g.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nconst __wbg_random_656f2ae924b2540e = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_error_f851667af71bcfc6() { return logError(function (arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);\n    }\n}, arguments) };\n\nfunction __wbg_new_abda76e883ba8a5f() { return logError(function () {\n    const ret = new Error();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_stack_658279fe44541cf6() { return logError(function (arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n}, arguments) };\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkRBQW9CO0FBQzVCO0FBQ0EsQ0FBQzs7QUFFTSx3Q0FBd0M7QUFDL0M7QUFDQTtBQUNBLENBQUM7O0FBRU0sMENBQTBDO0FBQ2pEO0FBQ0Esd0NBQXdDLDZEQUFzQixFQUFFLDhEQUF1QjtBQUN2RjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSx3Q0FBd0MsNkRBQXNCLEVBQUUsOERBQXVCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BrZy9pbmRleF9iZy5qcz82MTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9pbmRleF9iZy53YXNtJztcblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgzMikuZmlsbCh1bmRlZmluZWQpO1xuXG5oZWFwLnB1c2godW5kZWZpbmVkLCBudWxsLCB0cnVlLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHsgcmV0dXJuIGhlYXBbaWR4XTsgfVxuXG5mdW5jdGlvbiBpc0xpa2VOb25lKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkIHx8IHggPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnROdW0obikge1xuICAgIGlmICh0eXBlb2YobikgIT09ICdudW1iZXInKSB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgbnVtYmVyIGFyZ3VtZW50Jyk7XG59XG5cbmxldCBjYWNoZWRGbG9hdDY0TWVtb3J5MCA9IG5ldyBGbG9hdDY0QXJyYXkoKTtcblxuZnVuY3Rpb24gZ2V0RmxvYXQ2NE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZEZsb2F0NjRNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkRmxvYXQ2NE1lbW9yeTAgPSBuZXcgRmxvYXQ2NEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRGbG9hdDY0TWVtb3J5MDtcbn1cblxubGV0IGNhY2hlZEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KCk7XG5cbmZ1bmN0aW9uIGdldEludDMyTWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkSW50MzJNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkSW50MzJNZW1vcnkwID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZEludDMyTWVtb3J5MDtcbn1cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSgpO1xuXG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaWYgKHR5cGVvZihoZWFwX25leHQpICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdjb3JydXB0IGhlYXAnKTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0Qm9vbGVhbihuKSB7XG4gICAgaWYgKHR5cGVvZihuKSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBib29sZWFuIGFyZ3VtZW50Jyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGRlYnVnU3RyaW5nKHZhbCkge1xuICAgIC8vIHByaW1pdGl2ZSB0eXBlc1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8IHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAgYCR7dmFsfWA7XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBgXCIke3ZhbH1cImA7XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdzeW1ib2wnKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdmFsLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdTeW1ib2wnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBTeW1ib2woJHtkZXNjcmlwdGlvbn0pYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YWwubmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09ICdzdHJpbmcnICYmIG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBGdW5jdGlvbigke25hbWV9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBvYmplY3RzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB2YWwubGVuZ3RoO1xuICAgICAgICBsZXQgZGVidWcgPSAnWyc7XG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSBkZWJ1Z1N0cmluZyh2YWxbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVidWcgKz0gJywgJyArIGRlYnVnU3RyaW5nKHZhbFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcgKz0gJ10nO1xuICAgICAgICByZXR1cm4gZGVidWc7XG4gICAgfVxuICAgIC8vIFRlc3QgZm9yIGJ1aWx0LWluXG4gICAgY29uc3QgYnVpbHRJbk1hdGNoZXMgPSAvXFxbb2JqZWN0IChbXlxcXV0rKVxcXS8uZXhlYyh0b1N0cmluZy5jYWxsKHZhbCkpO1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgaWYgKGJ1aWx0SW5NYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gYnVpbHRJbk1hdGNoZXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFpbGVkIHRvIG1hdGNoIHRoZSBzdGFuZGFyZCAnW29iamVjdCBDbGFzc05hbWVdJ1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lID09ICdPYmplY3QnKSB7XG4gICAgICAgIC8vIHdlJ3JlIGEgdXNlciBkZWZpbmVkIGNsYXNzIG9yIE9iamVjdFxuICAgICAgICAvLyBKU09OLnN0cmluZ2lmeSBhdm9pZHMgcHJvYmxlbXMgd2l0aCBjeWNsZXMsIGFuZCBpcyBnZW5lcmFsbHkgbXVjaFxuICAgICAgICAvLyBlYXNpZXIgdGhhbiBsb29waW5nIHRocm91Z2ggb3duUHJvcGVydGllcyBvZiBgdmFsYC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0KCcgKyBKU09OLnN0cmluZ2lmeSh2YWwpICsgJyknO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZXJyb3JzXG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWwubmFtZX06ICR7dmFsLm1lc3NhZ2V9XFxuJHt2YWwuc3RhY2t9YDtcbiAgICB9XG4gICAgLy8gVE9ETyB3ZSBjb3VsZCB0ZXN0IGZvciBtb3JlIHRoaW5ncyBoZXJlLCBsaWtlIGBTZXRgcyBhbmQgYE1hcGBzLlxuICAgIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHR5cGVvZihhcmcpICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIHN0cmluZyBhcmd1bWVudCcpO1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuKTtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuICAgICAgICBpZiAocmV0LnJlYWQgIT09IGFyZy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHBhc3Mgd2hvbGUgc3RyaW5nJyk7XG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X3BhbmljX2hvb2soKSB7XG4gICAgd2FzbS5pbml0X3BhbmljX2hvb2soKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IoZiwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbGV0IGVycm9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IGAke2UubWVzc2FnZX1cXG5cXG5TdGFjazpcXG4ke2Uuc3RhY2t9YCA6IGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gY2F0Y2goXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjxmYWlsZWQgdG8gc3RyaW5naWZ5IHRocm93biB2YWx1ZT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIndhc20tYmluZGdlbjogaW1wb3J0ZWQgSlMgZnVuY3Rpb24gdGhhdCB3YXMgbm90IG1hcmtlZCBhcyBgY2F0Y2hgIHRocmV3IGFuIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihmLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhuX3N0b3JlKGFkZEhlYXBPYmplY3QoZSkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90RGVmaW5lZCh3aGF0KSB7IHJldHVybiAoKSA9PiB7IHRocm93IG5ldyBFcnJvcihgJHt3aGF0fSBpcyBub3QgZGVmaW5lZGApOyB9OyB9XG4vKipcbiovXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGludm9rZSBgbmV3YCBkaXJlY3RseScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBfX3dyYXAocHRyKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoVW5pdmVyc2UucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLnB0ciA9IHB0cjtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5wdHI7XG4gICAgICAgIHRoaXMucHRyID0gMDtcblxuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMuX19kZXN0cm95X2ludG9fcmF3KCk7XG4gICAgICAgIHdhc20uX193YmdfdW5pdmVyc2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtVbml2ZXJzZX1cbiAgICAqL1xuICAgIHN0YXRpYyBuZXcoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udW5pdmVyc2VfbmV3KCk7XG4gICAgICAgIHJldHVybiBVbml2ZXJzZS5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKi9cbiAgICB0aWNrKCkge1xuICAgICAgICBpZiAodGhpcy5wdHIgPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0IHRvIHVzZSBhIG1vdmVkIHZhbHVlJyk7XG4gICAgICAgIF9hc3NlcnROdW0odGhpcy5wdHIpO1xuICAgICAgICB3YXNtLnVuaXZlcnNlX3RpY2sodGhpcy5wdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIHJlc2V0X2NhbnZhcygpIHtcbiAgICAgICAgaWYgKHRoaXMucHRyID09IDApIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byB1c2UgYSBtb3ZlZCB2YWx1ZScpO1xuICAgICAgICBfYXNzZXJ0TnVtKHRoaXMucHRyKTtcbiAgICAgICAgd2FzbS51bml2ZXJzZV9yZXNldF9jYW52YXModGhpcy5wdHIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fbnVtYmVyX2dldChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3Qgb2JqID0gZ2V0T2JqZWN0KGFyZzEpO1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihvYmopID09PSAnbnVtYmVyJyA/IG9iaiA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIWlzTGlrZU5vbmUocmV0KSkge1xuICAgICAgICBfYXNzZXJ0TnVtKHJldCk7XG4gICAgfVxuICAgIGdldEZsb2F0NjRNZW1vcnkwKClbYXJnMCAvIDggKyAxXSA9IGlzTGlrZU5vbmUocmV0KSA/IDAgOiByZXQ7XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9ICFpc0xpa2VOb25lKHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9zdHJpbmdfbmV3KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX1dpbmRvd19hY2M5N2ZmOWY1ZDJjN2I0KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFdpbmRvdztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICBfYXNzZXJ0Qm9vbGVhbihyZXQpO1xuICAgIHJldHVybiByZXQ7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19kb2N1bWVudF8zZWFkMzFkYmNhZDY1ODg2KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuZG9jdW1lbnQ7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbm5lcldpZHRoX2ZmYTU4NGY3NGQ3MjFmY2UoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5pbm5lcldpZHRoO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbm5lckhlaWdodF9mNDgwNGM4MDNmY2YwMmIwKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuaW5uZXJIZWlnaHQ7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldEVsZW1lbnRCeUlkXzNhNzA4YjgzZTRmMDM0ZDcoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5nZXRFbGVtZW50QnlJZChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBpc0xpa2VOb25lKHJldCkgPyAwIDogYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9DYW52YXNSZW5kZXJpbmdDb250ZXh0MmRfZmY4MGMwNmQyOTZlMzYyMigpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgX2Fzc2VydEJvb2xlYW4ocmV0KTtcbiAgICByZXR1cm4gcmV0O1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0c3Ryb2tlU3R5bGVfODk5ZWEzNzIwZGFlMzIzYigpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnN0cm9rZVN0eWxlID0gZ2V0T2JqZWN0KGFyZzEpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0ZmlsbFN0eWxlXzUzY2NmMmE5ODg2YzFjNGQoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGdldE9iamVjdChhcmcwKS5maWxsU3R5bGUgPSBnZXRPYmplY3QoYXJnMSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19iZWdpblBhdGhfNGU5MWI3MDkyZDBkMzNkOSgpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmJlZ2luUGF0aCgpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc3Ryb2tlXzg1ZGVlN2Q4N2M0YTZlYWQoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGdldE9iamVjdChhcmcwKS5zdHJva2UoKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FyY18zMGU1NTBjNDA4ZjE1MWFjKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuYXJjKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2xvc2VQYXRoX2QwYWI3NWQ0ZGVmNzQ5YTIoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGdldE9iamVjdChhcmcwKS5jbG9zZVBhdGgoKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2ZpbGxSZWN0X2M3YTE5ZTEzYzUyNDI1MDcoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIGdldE9iamVjdChhcmcwKS5maWxsUmVjdChhcmcxLCBhcmcyLCBhcmczLCBhcmc0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2luc3RhbmNlb2ZfSHRtbENhbnZhc0VsZW1lbnRfOTc3NjE2MTdhZjZlYTA4OSgpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICBfYXNzZXJ0Qm9vbGVhbihyZXQpO1xuICAgIHJldHVybiByZXQ7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRDb250ZXh0XzRkNWU5Nzg5MmMxYjIwNmEoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5nZXRDb250ZXh0KGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdub2FyZ3NfYjViMDYzZmM2YzJmMDM3NigpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEZ1bmN0aW9uKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NhbGxfOTdhZTlkODY0NWRjMzg4YigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsVGhpc183ZjIwNmJkYTYyOGQ1Mjg2KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2VsZl82ZDQ3OTUwNmY3MmM2YTcxKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2luZG93X2YyNTU3Y2M3ODQ5MGFjZWIoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsX2JhNzVjNTBkMWNmMzg0ZjQoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsLmdsb2JhbDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgY29uc3QgX193YmdfcmFuZG9tXzY1NmYyYWU5MjRiMjU0MGUgPSB0eXBlb2YgTWF0aC5yYW5kb20gPT0gJ2Z1bmN0aW9uJyA/IE1hdGgucmFuZG9tIDogbm90RGVmaW5lZCgnTWF0aC5yYW5kb20nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfdW5kZWZpbmVkKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkgPT09IHVuZGVmaW5lZDtcbiAgICBfYXNzZXJ0Qm9vbGVhbihyZXQpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19lcnJvcl9mODUxNjY3YWY3MWJjZmM2KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoYXJnMCwgYXJnMSk7XG4gICAgfVxufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3X2FiZGE3NmU4ODNiYThhNWYoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEVycm9yKCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3N0YWNrXzY1ODI3OWZlNDQ1NDFjZjYoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcxKS5zdGFjaztcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDFdID0gbGVuMDtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fZGVidWdfc3RyaW5nKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBkZWJ1Z1N0cmluZyhnZXRPYmplY3QoYXJnMSkpO1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMF0gPSBwdHIwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pkg/index_bg.js\n");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "9077894245646a39faa7", {
		"./index_bg.js": {
			"__wbindgen_number_get": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_get,
			"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,
			"__wbg_instanceof_Window_acc97ff9f5d2c7b4": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_acc97ff9f5d2c7b4,
			"__wbg_document_3ead31dbcad65886": WEBPACK_IMPORTED_MODULE_0.__wbg_document_3ead31dbcad65886,
			"__wbg_innerWidth_ffa584f74d721fce": WEBPACK_IMPORTED_MODULE_0.__wbg_innerWidth_ffa584f74d721fce,
			"__wbg_innerHeight_f4804c803fcf02b0": WEBPACK_IMPORTED_MODULE_0.__wbg_innerHeight_f4804c803fcf02b0,
			"__wbg_getElementById_3a708b83e4f034d7": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_3a708b83e4f034d7,
			"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622,
			"__wbg_setstrokeStyle_899ea3720dae323b": WEBPACK_IMPORTED_MODULE_0.__wbg_setstrokeStyle_899ea3720dae323b,
			"__wbg_setfillStyle_53ccf2a9886c1c4d": WEBPACK_IMPORTED_MODULE_0.__wbg_setfillStyle_53ccf2a9886c1c4d,
			"__wbg_beginPath_4e91b7092d0d33d9": WEBPACK_IMPORTED_MODULE_0.__wbg_beginPath_4e91b7092d0d33d9,
			"__wbg_stroke_85dee7d87c4a6ead": WEBPACK_IMPORTED_MODULE_0.__wbg_stroke_85dee7d87c4a6ead,
			"__wbg_arc_30e550c408f151ac": WEBPACK_IMPORTED_MODULE_0.__wbg_arc_30e550c408f151ac,
			"__wbg_closePath_d0ab75d4def749a2": WEBPACK_IMPORTED_MODULE_0.__wbg_closePath_d0ab75d4def749a2,
			"__wbg_fillRect_c7a19e13c5242507": WEBPACK_IMPORTED_MODULE_0.__wbg_fillRect_c7a19e13c5242507,
			"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_HtmlCanvasElement_97761617af6ea089,
			"__wbg_getContext_4d5e97892c1b206a": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_4d5e97892c1b206a,
			"__wbg_newnoargs_b5b063fc6c2f0376": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_b5b063fc6c2f0376,
			"__wbg_call_97ae9d8645dc388b": WEBPACK_IMPORTED_MODULE_0.__wbg_call_97ae9d8645dc388b,
			"__wbg_globalThis_7f206bda628d5286": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_7f206bda628d5286,
			"__wbg_self_6d479506f72c6a71": WEBPACK_IMPORTED_MODULE_0.__wbg_self_6d479506f72c6a71,
			"__wbg_window_f2557cc78490aceb": WEBPACK_IMPORTED_MODULE_0.__wbg_window_f2557cc78490aceb,
			"__wbg_global_ba75c50d1cf384f4": WEBPACK_IMPORTED_MODULE_0.__wbg_global_ba75c50d1cf384f4,
			"__wbg_random_656f2ae924b2540e": WEBPACK_IMPORTED_MODULE_0.__wbg_random_656f2ae924b2540e,
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbg_error_f851667af71bcfc6": WEBPACK_IMPORTED_MODULE_0.__wbg_error_f851667af71bcfc6,
			"__wbg_new_abda76e883ba8a5f": WEBPACK_IMPORTED_MODULE_0.__wbg_new_abda76e883ba8a5f,
			"__wbg_stack_658279fe44541cf6": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_658279fe44541cf6,
			"__wbindgen_debug_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ "./pkg/index_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "9077894245646a39faa7", {
		"./index_bg.js": {
			"__wbindgen_number_get": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_get,
			"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,
			"__wbg_instanceof_Window_acc97ff9f5d2c7b4": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_acc97ff9f5d2c7b4,
			"__wbg_document_3ead31dbcad65886": WEBPACK_IMPORTED_MODULE_0.__wbg_document_3ead31dbcad65886,
			"__wbg_innerWidth_ffa584f74d721fce": WEBPACK_IMPORTED_MODULE_0.__wbg_innerWidth_ffa584f74d721fce,
			"__wbg_innerHeight_f4804c803fcf02b0": WEBPACK_IMPORTED_MODULE_0.__wbg_innerHeight_f4804c803fcf02b0,
			"__wbg_getElementById_3a708b83e4f034d7": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_3a708b83e4f034d7,
			"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622,
			"__wbg_setstrokeStyle_899ea3720dae323b": WEBPACK_IMPORTED_MODULE_0.__wbg_setstrokeStyle_899ea3720dae323b,
			"__wbg_setfillStyle_53ccf2a9886c1c4d": WEBPACK_IMPORTED_MODULE_0.__wbg_setfillStyle_53ccf2a9886c1c4d,
			"__wbg_beginPath_4e91b7092d0d33d9": WEBPACK_IMPORTED_MODULE_0.__wbg_beginPath_4e91b7092d0d33d9,
			"__wbg_stroke_85dee7d87c4a6ead": WEBPACK_IMPORTED_MODULE_0.__wbg_stroke_85dee7d87c4a6ead,
			"__wbg_arc_30e550c408f151ac": WEBPACK_IMPORTED_MODULE_0.__wbg_arc_30e550c408f151ac,
			"__wbg_closePath_d0ab75d4def749a2": WEBPACK_IMPORTED_MODULE_0.__wbg_closePath_d0ab75d4def749a2,
			"__wbg_fillRect_c7a19e13c5242507": WEBPACK_IMPORTED_MODULE_0.__wbg_fillRect_c7a19e13c5242507,
			"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_HtmlCanvasElement_97761617af6ea089,
			"__wbg_getContext_4d5e97892c1b206a": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_4d5e97892c1b206a,
			"__wbg_newnoargs_b5b063fc6c2f0376": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_b5b063fc6c2f0376,
			"__wbg_call_97ae9d8645dc388b": WEBPACK_IMPORTED_MODULE_0.__wbg_call_97ae9d8645dc388b,
			"__wbg_globalThis_7f206bda628d5286": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_7f206bda628d5286,
			"__wbg_self_6d479506f72c6a71": WEBPACK_IMPORTED_MODULE_0.__wbg_self_6d479506f72c6a71,
			"__wbg_window_f2557cc78490aceb": WEBPACK_IMPORTED_MODULE_0.__wbg_window_f2557cc78490aceb,
			"__wbg_global_ba75c50d1cf384f4": WEBPACK_IMPORTED_MODULE_0.__wbg_global_ba75c50d1cf384f4,
			"__wbg_random_656f2ae924b2540e": WEBPACK_IMPORTED_MODULE_0.__wbg_random_656f2ae924b2540e,
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbg_error_f851667af71bcfc6": WEBPACK_IMPORTED_MODULE_0.__wbg_error_f851667af71bcfc6,
			"__wbg_new_abda76e883ba8a5f": WEBPACK_IMPORTED_MODULE_0.__wbg_new_abda76e883ba8a5f,
			"__wbg_stack_658279fe44541cf6": WEBPACK_IMPORTED_MODULE_0.__wbg_stack_658279fe44541cf6,
			"__wbindgen_debug_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./bootstrap.js");
/******/ 	
/******/ })()
;