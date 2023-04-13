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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/index_bg.wasm */ \"./docs/index_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst DRAW_FPS = false;\n\n_docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.init_panic_hook();\ndocument.body.style.margin = 0;\nlet canvas = document.getElementById(\"bg-canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nlet universe = _docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new();\n\naddEventListener(\"resize\", (event) => {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  universe = _docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new();\n});\n\nlet currentTime = 0;\nlet lastTime = 0;\nlet rollingAverage = Array(15).fill(100); // avg framerate over 15 frames, initialized to 100 fps\nconst fps = () => {\n  currentTime = new Date();\n  const _fps = 1000 / (currentTime - lastTime);\n  rollingAverage.push(_fps);\n  rollingAverage.shift();\n  const _avgFPS = rollingAverage.reduce((a, b) => a + b) / rollingAverage.length;\n  lastTime = currentTime;\n  ctx.font = \"24px serif\";\n  ctx.textAlign = \"right\";\n  ctx.fillStyle = \"red\";\n  ctx.fillText(_avgFPS.toFixed(0), canvas.width - 50, 50);\n}\n\nconst renderLoop = () => {\n  // Pauses when tab is not active\n  _docs_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(universe);\n  if (DRAW_FPS) { fps(); }\n  requestAnimationFrame(renderLoop);\n};\n\nrenderLoop();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ib290c3RyYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFDN0M7O0FBRUEsZ0VBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBaUI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkRBQWlCO0FBQzlCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsOERBQWtCO0FBQ3BCLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib290c3RyYXAuanM/ZGY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL2RvY3MvaW5kZXhfYmcud2FzbVwiO1xuY29uc3QgRFJBV19GUFMgPSBmYWxzZTtcblxud2FzbS5pbml0X3BhbmljX2hvb2soKTtcbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gMDtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnLWNhbnZhc1wiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbmN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xubGV0IHVuaXZlcnNlID0gd2FzbS51bml2ZXJzZV9uZXcoKTtcblxuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHVuaXZlcnNlID0gd2FzbS51bml2ZXJzZV9uZXcoKTtcbn0pO1xuXG5sZXQgY3VycmVudFRpbWUgPSAwO1xubGV0IGxhc3RUaW1lID0gMDtcbmxldCByb2xsaW5nQXZlcmFnZSA9IEFycmF5KDE1KS5maWxsKDEwMCk7IC8vIGF2ZyBmcmFtZXJhdGUgb3ZlciAxNSBmcmFtZXMsIGluaXRpYWxpemVkIHRvIDEwMCBmcHNcbmNvbnN0IGZwcyA9ICgpID0+IHtcbiAgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBfZnBzID0gMTAwMCAvIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKTtcbiAgcm9sbGluZ0F2ZXJhZ2UucHVzaChfZnBzKTtcbiAgcm9sbGluZ0F2ZXJhZ2Uuc2hpZnQoKTtcbiAgY29uc3QgX2F2Z0ZQUyA9IHJvbGxpbmdBdmVyYWdlLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gcm9sbGluZ0F2ZXJhZ2UubGVuZ3RoO1xuICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICBjdHguZm9udCA9IFwiMjRweCBzZXJpZlwiO1xuICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgY3R4LmZpbGxUZXh0KF9hdmdGUFMudG9GaXhlZCgwKSwgY2FudmFzLndpZHRoIC0gNTAsIDUwKTtcbn1cblxuY29uc3QgcmVuZGVyTG9vcCA9ICgpID0+IHtcbiAgLy8gUGF1c2VzIHdoZW4gdGFiIGlzIG5vdCBhY3RpdmVcbiAgd2FzbS51bml2ZXJzZV90aWNrKHVuaXZlcnNlKTtcbiAgaWYgKERSQVdfRlBTKSB7IGZwcygpOyB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJMb29wKTtcbn07XG5cbnJlbmRlckxvb3AoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./bootstrap.js\n");

/***/ }),

/***/ "./docs/index_bg.js":
/*!**************************!*\
  !*** ./docs/index_bg.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"__wbg_arc_30e550c408f151ac\": () => (/* binding */ __wbg_arc_30e550c408f151ac),\n/* harmony export */   \"__wbg_beginPath_4e91b7092d0d33d9\": () => (/* binding */ __wbg_beginPath_4e91b7092d0d33d9),\n/* harmony export */   \"__wbg_call_97ae9d8645dc388b\": () => (/* binding */ __wbg_call_97ae9d8645dc388b),\n/* harmony export */   \"__wbg_closePath_d0ab75d4def749a2\": () => (/* binding */ __wbg_closePath_d0ab75d4def749a2),\n/* harmony export */   \"__wbg_document_3ead31dbcad65886\": () => (/* binding */ __wbg_document_3ead31dbcad65886),\n/* harmony export */   \"__wbg_error_f851667af71bcfc6\": () => (/* binding */ __wbg_error_f851667af71bcfc6),\n/* harmony export */   \"__wbg_fillRect_c7a19e13c5242507\": () => (/* binding */ __wbg_fillRect_c7a19e13c5242507),\n/* harmony export */   \"__wbg_getContext_4d5e97892c1b206a\": () => (/* binding */ __wbg_getContext_4d5e97892c1b206a),\n/* harmony export */   \"__wbg_getElementById_3a708b83e4f034d7\": () => (/* binding */ __wbg_getElementById_3a708b83e4f034d7),\n/* harmony export */   \"__wbg_globalThis_7f206bda628d5286\": () => (/* binding */ __wbg_globalThis_7f206bda628d5286),\n/* harmony export */   \"__wbg_global_ba75c50d1cf384f4\": () => (/* binding */ __wbg_global_ba75c50d1cf384f4),\n/* harmony export */   \"__wbg_innerHeight_f4804c803fcf02b0\": () => (/* binding */ __wbg_innerHeight_f4804c803fcf02b0),\n/* harmony export */   \"__wbg_innerWidth_ffa584f74d721fce\": () => (/* binding */ __wbg_innerWidth_ffa584f74d721fce),\n/* harmony export */   \"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622\": () => (/* binding */ __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622),\n/* harmony export */   \"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089\": () => (/* binding */ __wbg_instanceof_HtmlCanvasElement_97761617af6ea089),\n/* harmony export */   \"__wbg_instanceof_Window_acc97ff9f5d2c7b4\": () => (/* binding */ __wbg_instanceof_Window_acc97ff9f5d2c7b4),\n/* harmony export */   \"__wbg_new_abda76e883ba8a5f\": () => (/* binding */ __wbg_new_abda76e883ba8a5f),\n/* harmony export */   \"__wbg_newnoargs_b5b063fc6c2f0376\": () => (/* binding */ __wbg_newnoargs_b5b063fc6c2f0376),\n/* harmony export */   \"__wbg_random_656f2ae924b2540e\": () => (/* binding */ __wbg_random_656f2ae924b2540e),\n/* harmony export */   \"__wbg_self_6d479506f72c6a71\": () => (/* binding */ __wbg_self_6d479506f72c6a71),\n/* harmony export */   \"__wbg_setfillStyle_53ccf2a9886c1c4d\": () => (/* binding */ __wbg_setfillStyle_53ccf2a9886c1c4d),\n/* harmony export */   \"__wbg_setstrokeStyle_899ea3720dae323b\": () => (/* binding */ __wbg_setstrokeStyle_899ea3720dae323b),\n/* harmony export */   \"__wbg_stack_658279fe44541cf6\": () => (/* binding */ __wbg_stack_658279fe44541cf6),\n/* harmony export */   \"__wbg_stroke_85dee7d87c4a6ead\": () => (/* binding */ __wbg_stroke_85dee7d87c4a6ead),\n/* harmony export */   \"__wbg_window_f2557cc78490aceb\": () => (/* binding */ __wbg_window_f2557cc78490aceb),\n/* harmony export */   \"__wbindgen_debug_string\": () => (/* binding */ __wbindgen_debug_string),\n/* harmony export */   \"__wbindgen_is_undefined\": () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   \"__wbindgen_number_get\": () => (/* binding */ __wbindgen_number_get),\n/* harmony export */   \"__wbindgen_object_clone_ref\": () => (/* binding */ __wbindgen_object_clone_ref),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"init_panic_hook\": () => (/* binding */ init_panic_hook)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./docs/index_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nlet cachedFloat64Memory0 = new Float64Array();\n\nfunction getFloat64Memory0() {\n    if (cachedFloat64Memory0.byteLength === 0) {\n        cachedFloat64Memory0 = new Float64Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedFloat64Memory0;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nfunction init_panic_hook() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.init_panic_hook();\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Universe {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new();\n        return Universe.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    */\n    reset_canvas() {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_reset_canvas(this.ptr);\n    }\n}\n\nfunction __wbindgen_number_get(arg0, arg1) {\n    const obj = getObject(arg1);\n    const ret = typeof(obj) === 'number' ? obj : undefined;\n    if (!isLikeNone(ret)) {\n        _assertNum(ret);\n    }\n    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;\n    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_instanceof_Window_acc97ff9f5d2c7b4() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof Window;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_document_3ead31dbcad65886() { return logError(function (arg0) {\n    const ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_innerWidth_ffa584f74d721fce() { return handleError(function (arg0) {\n    const ret = getObject(arg0).innerWidth;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_innerHeight_f4804c803fcf02b0() { return handleError(function (arg0) {\n    const ret = getObject(arg0).innerHeight;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_getElementById_3a708b83e4f034d7() { return logError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof CanvasRenderingContext2D;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_setstrokeStyle_899ea3720dae323b() { return logError(function (arg0, arg1) {\n    getObject(arg0).strokeStyle = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_setfillStyle_53ccf2a9886c1c4d() { return logError(function (arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_beginPath_4e91b7092d0d33d9() { return logError(function (arg0) {\n    getObject(arg0).beginPath();\n}, arguments) };\n\nfunction __wbg_stroke_85dee7d87c4a6ead() { return logError(function (arg0) {\n    getObject(arg0).stroke();\n}, arguments) };\n\nfunction __wbg_arc_30e550c408f151ac() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {\n    getObject(arg0).arc(arg1, arg2, arg3, arg4, arg5);\n}, arguments) };\n\nfunction __wbg_closePath_d0ab75d4def749a2() { return logError(function (arg0) {\n    getObject(arg0).closePath();\n}, arguments) };\n\nfunction __wbg_fillRect_c7a19e13c5242507() { return logError(function (arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n}, arguments) };\n\nfunction __wbg_instanceof_HtmlCanvasElement_97761617af6ea089() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof HTMLCanvasElement;\n    } catch {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_getContext_4d5e97892c1b206a() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_newnoargs_b5b063fc6c2f0376() { return logError(function (arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_call_97ae9d8645dc388b() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_7f206bda628d5286() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_6d479506f72c6a71() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_f2557cc78490aceb() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_ba75c50d1cf384f4() { return handleError(function () {\n    const ret = __webpack_require__.g.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_random_656f2ae924b2540e = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbg_error_f851667af71bcfc6() { return logError(function (arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);\n    }\n}, arguments) };\n\nfunction __wbg_new_abda76e883ba8a5f() { return logError(function () {\n    const ret = new Error();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_stack_658279fe44541cf6() { return logError(function (arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n}, arguments) };\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJEQUFvQjtBQUM1QjtBQUNBLENBQUM7O0FBRU0sd0NBQXdDO0FBQy9DO0FBQ0E7QUFDQSxDQUFDOztBQUVNLDBDQUEwQztBQUNqRDtBQUNBLHdDQUF3Qyw2REFBc0IsRUFBRSw4REFBdUI7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0Esd0NBQXdDLDZEQUFzQixFQUFFLDhEQUF1QjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2luZGV4X2JnLmpzPzFmNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2luZGV4X2JnLndhc20nO1xuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmZ1bmN0aW9uIGlzTGlrZU5vbmUoeCkge1xuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQgfHwgeCA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydE51bShuKSB7XG4gICAgaWYgKHR5cGVvZihuKSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYSBudW1iZXIgYXJndW1lbnQnKTtcbn1cblxubGV0IGNhY2hlZEZsb2F0NjRNZW1vcnkwID0gbmV3IEZsb2F0NjRBcnJheSgpO1xuXG5mdW5jdGlvbiBnZXRGbG9hdDY0TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkRmxvYXQ2NE1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRGbG9hdDY0TWVtb3J5MCA9IG5ldyBGbG9hdDY0QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZEZsb2F0NjRNZW1vcnkwO1xufVxuXG5sZXQgY2FjaGVkSW50MzJNZW1vcnkwID0gbmV3IEludDMyQXJyYXkoKTtcblxuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRJbnQzMk1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRJbnQzMk1lbW9yeTAgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkSW50MzJNZW1vcnkwO1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KCk7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5sZXQgaGVhcF9uZXh0ID0gaGVhcC5sZW5ndGg7XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBpZiAodHlwZW9mKGhlYXBfbmV4dCkgIT09ICdudW1iZXInKSB0aHJvdyBuZXcgRXJyb3IoJ2NvcnJ1cHQgaGVhcCcpO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRCb29sZWFuKG4pIHtcbiAgICBpZiAodHlwZW9mKG4pICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIGJvb2xlYW4gYXJndW1lbnQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZGVidWdTdHJpbmcodmFsKSB7XG4gICAgLy8gcHJpbWl0aXZlIHR5cGVzXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHwgdmFsID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICBgJHt2YWx9YDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGBcIiR7dmFsfVwiYDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB2YWwuZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1N5bWJvbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYFN5bWJvbCgke2Rlc2NyaXB0aW9ufSlgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhbC5uYW1lO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYEZ1bmN0aW9uKCR7bmFtZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG9iamVjdHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGxldCBkZWJ1ZyA9ICdbJztcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRlYnVnICs9IGRlYnVnU3RyaW5nKHZhbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSAnLCAnICsgZGVidWdTdHJpbmcodmFsW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyArPSAnXSc7XG4gICAgICAgIHJldHVybiBkZWJ1ZztcbiAgICB9XG4gICAgLy8gVGVzdCBmb3IgYnVpbHQtaW5cbiAgICBjb25zdCBidWlsdEluTWF0Y2hlcyA9IC9cXFtvYmplY3QgKFteXFxdXSspXFxdLy5leGVjKHRvU3RyaW5nLmNhbGwodmFsKSk7XG4gICAgbGV0IGNsYXNzTmFtZTtcbiAgICBpZiAoYnVpbHRJbk1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc05hbWUgPSBidWlsdEluTWF0Y2hlc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWlsZWQgdG8gbWF0Y2ggdGhlIHN0YW5kYXJkICdbb2JqZWN0IENsYXNzTmFtZV0nXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgPT0gJ09iamVjdCcpIHtcbiAgICAgICAgLy8gd2UncmUgYSB1c2VyIGRlZmluZWQgY2xhc3Mgb3IgT2JqZWN0XG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IGF2b2lkcyBwcm9ibGVtcyB3aXRoIGN5Y2xlcywgYW5kIGlzIGdlbmVyYWxseSBtdWNoXG4gICAgICAgIC8vIGVhc2llciB0aGFuIGxvb3BpbmcgdGhyb3VnaCBvd25Qcm9wZXJ0aWVzIG9mIGB2YWxgLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyAnKSc7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlcnJvcnNcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbC5uYW1lfTogJHt2YWwubWVzc2FnZX1cXG4ke3ZhbC5zdGFja31gO1xuICAgIH1cbiAgICAvLyBUT0RPIHdlIGNvdWxkIHRlc3QgZm9yIG1vcmUgdGhpbmdzIGhlcmUsIGxpa2UgYFNldGBzIGFuZCBgTWFwYHMuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAodHlwZW9mKGFyZykgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIGEgc3RyaW5nIGFyZ3VtZW50Jyk7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCk7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4pO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKTtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG4gICAgICAgIGlmIChyZXQucmVhZCAhPT0gYXJnLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gcGFzcyB3aG9sZSBzdHJpbmcnKTtcbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuLyoqXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRfcGFuaWNfaG9vaygpIHtcbiAgICB3YXNtLmluaXRfcGFuaWNfaG9vaygpO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvcihmLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsZXQgZXJyb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIEVycm9yID8gYCR7ZS5tZXNzYWdlfVxcblxcblN0YWNrOlxcbiR7ZS5zdGFja31gIDogZS50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBjYXRjaChfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGZhaWxlZCB0byBzdHJpbmdpZnkgdGhyb3duIHZhbHVlPlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwid2FzbS1iaW5kZ2VuOiBpbXBvcnRlZCBKUyBmdW5jdGlvbiB0aGF0IHdhcyBub3QgbWFya2VkIGFzIGBjYXRjaGAgdGhyZXcgYW4gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9leG5fc3RvcmUoYWRkSGVhcE9iamVjdChlKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3REZWZpbmVkKHdoYXQpIHsgcmV0dXJuICgpID0+IHsgdGhyb3cgbmV3IEVycm9yKGAke3doYXR9IGlzIG5vdCBkZWZpbmVkYCk7IH07IH1cbi8qKlxuKi9cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgaW52b2tlIGBuZXdgIGRpcmVjdGx5Jyk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9fd3JhcChwdHIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShVbml2ZXJzZS5wcm90b3R5cGUpO1xuICAgICAgICBvYmoucHRyID0gcHRyO1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgX19kZXN0cm95X2ludG9fcmF3KCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgZnJlZSgpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX2Rlc3Ryb3lfaW50b19yYXcoKTtcbiAgICAgICAgd2FzbS5fX3diZ191bml2ZXJzZV9mcmVlKHB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHJldHVybnMge1VuaXZlcnNlfVxuICAgICovXG4gICAgc3RhdGljIG5ldygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS51bml2ZXJzZV9uZXcoKTtcbiAgICAgICAgcmV0dXJuIFVuaXZlcnNlLl9fd3JhcChyZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAqL1xuICAgIHRpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnB0ciA9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gdXNlIGEgbW92ZWQgdmFsdWUnKTtcbiAgICAgICAgX2Fzc2VydE51bSh0aGlzLnB0cik7XG4gICAgICAgIHdhc20udW5pdmVyc2VfdGljayh0aGlzLnB0cik7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgcmVzZXRfY2FudmFzKCkge1xuICAgICAgICBpZiAodGhpcy5wdHIgPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0IHRvIHVzZSBhIG1vdmVkIHZhbHVlJyk7XG4gICAgICAgIF9hc3NlcnROdW0odGhpcy5wdHIpO1xuICAgICAgICB3YXNtLnVuaXZlcnNlX3Jlc2V0X2NhbnZhcyh0aGlzLnB0cik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9udW1iZXJfZ2V0KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCBvYmogPSBnZXRPYmplY3QoYXJnMSk7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKG9iaikgPT09ICdudW1iZXInID8gb2JqIDogdW5kZWZpbmVkO1xuICAgIGlmICghaXNMaWtlTm9uZShyZXQpKSB7XG4gICAgICAgIF9hc3NlcnROdW0ocmV0KTtcbiAgICB9XG4gICAgZ2V0RmxvYXQ2NE1lbW9yeTAoKVthcmcwIC8gOCArIDFdID0gaXNMaWtlTm9uZShyZXQpID8gMCA6IHJldDtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gIWlzTGlrZU5vbmUocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3N0cmluZ19uZXcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2luc3RhbmNlb2ZfV2luZG93X2FjYzk3ZmY5ZjVkMmM3YjQoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZ2V0T2JqZWN0KGFyZzApIGluc3RhbmNlb2YgV2luZG93O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIF9hc3NlcnRCb29sZWFuKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2RvY3VtZW50XzNlYWQzMWRiY2FkNjU4ODYoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5kb2N1bWVudDtcbiAgICByZXR1cm4gaXNMaWtlTm9uZShyZXQpID8gMCA6IGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2lubmVyV2lkdGhfZmZhNTg0Zjc0ZDcyMWZjZSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmlubmVyV2lkdGg7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2lubmVySGVpZ2h0X2Y0ODA0YzgwM2ZjZjAyYjAoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5pbm5lckhlaWdodDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0RWxlbWVudEJ5SWRfM2E3MDhiODNlNGYwMzRkNygpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmdldEVsZW1lbnRCeUlkKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyZF9mZjgwYzA2ZDI5NmUzNjIyKCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICBfYXNzZXJ0Qm9vbGVhbihyZXQpO1xuICAgIHJldHVybiByZXQ7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRzdHJva2VTdHlsZV84OTllYTM3MjBkYWUzMjNiKCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuc3Ryb2tlU3R5bGUgPSBnZXRPYmplY3QoYXJnMSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRmaWxsU3R5bGVfNTNjY2YyYTk4ODZjMWM0ZCgpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmZpbGxTdHlsZSA9IGdldE9iamVjdChhcmcxKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2JlZ2luUGF0aF80ZTkxYjcwOTJkMGQzM2Q5KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBnZXRPYmplY3QoYXJnMCkuYmVnaW5QYXRoKCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zdHJva2VfODVkZWU3ZDg3YzRhNmVhZCgpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnN0cm9rZSgpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYXJjXzMwZTU1MGM0MDhmMTUxYWMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSkge1xuICAgIGdldE9iamVjdChhcmcwKS5hcmMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jbG9zZVBhdGhfZDBhYjc1ZDRkZWY3NDlhMigpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmNsb3NlUGF0aCgpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZmlsbFJlY3RfYzdhMTllMTNjNTI0MjUwNygpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0KSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmZpbGxSZWN0KGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9IdG1sQ2FudmFzRWxlbWVudF85Nzc2MTYxN2FmNmVhMDg5KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIF9hc3NlcnRCb29sZWFuKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldENvbnRleHRfNGQ1ZTk3ODkyYzFiMjA2YSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmdldENvbnRleHQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzEsIGFyZzIpKTtcbiAgICByZXR1cm4gaXNMaWtlTm9uZShyZXQpID8gMCA6IGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld25vYXJnc19iNWIwNjNmYzZjMmYwMzc2KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF85N2FlOWQ4NjQ1ZGMzODhiKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuY2FsbChnZXRPYmplY3QoYXJnMSkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nbG9iYWxUaGlzXzdmMjA2YmRhNjI4ZDUyODYoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsVGhpcy5nbG9iYWxUaGlzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZWxmXzZkNDc5NTA2ZjcyYzZhNzEoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gc2VsZi5zZWxmO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ193aW5kb3dfZjI1NTdjYzc4NDkwYWNlYigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSB3aW5kb3cud2luZG93O1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nbG9iYWxfYmE3NWM1MGQxY2YzODRmNCgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBnbG9iYWwuZ2xvYmFsO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApID09PSB1bmRlZmluZWQ7XG4gICAgX2Fzc2VydEJvb2xlYW4ocmV0KTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYoYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgY29uc3QgX193YmdfcmFuZG9tXzY1NmYyYWU5MjRiMjU0MGUgPSB0eXBlb2YgTWF0aC5yYW5kb20gPT0gJ2Z1bmN0aW9uJyA/IE1hdGgucmFuZG9tIDogbm90RGVmaW5lZCgnTWF0aC5yYW5kb20nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2Vycm9yX2Y4NTE2NjdhZjcxYmNmYzYoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShhcmcwLCBhcmcxKTtcbiAgICB9XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfYWJkYTc2ZTg4M2JhOGE1ZigpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRXJyb3IoKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc3RhY2tfNjU4Mjc5ZmU0NDU0MWNmNigpIHsgcmV0dXJuIGxvZ0Vycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzEpLnN0YWNrO1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMV0gPSBsZW4wO1xuICAgIGdldEludDMyTWVtb3J5MCgpW2FyZzAgLyA0ICsgMF0gPSBwdHIwO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9kZWJ1Z19zdHJpbmcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGRlYnVnU3RyaW5nKGdldE9iamVjdChhcmcxKSk7XG4gICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAxXSA9IGxlbjA7XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9IHB0cjA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./docs/index_bg.js\n");

/***/ }),

/***/ "./docs/index_bg.wasm":
/*!****************************!*\
  !*** ./docs/index_bg.wasm ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "7ab450256615a847819a", {
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
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbg_random_656f2ae924b2540e": WEBPACK_IMPORTED_MODULE_0.__wbg_random_656f2ae924b2540e,
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
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ "./docs/index_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "7ab450256615a847819a", {
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
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbg_random_656f2ae924b2540e": WEBPACK_IMPORTED_MODULE_0.__wbg_random_656f2ae924b2540e,
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