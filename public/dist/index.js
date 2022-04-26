/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/candidato.ts":
/*!**********************************!*\
  !*** ./src/classes/candidato.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Candidato\": () => (/* binding */ Candidato)\n/* harmony export */ });\nclass Candidato {\n    // esse metodo de declarar as variaveis e depois chamar no construtor da para simplificar\n    //nome:string;\n    //idade:number|string;\n    // colocando o public no construtor é muito mais funcional\n    // se nao puser public as variaveis nao sao acessiveis\n    constructor(nome, idade) {\n        this.nome = nome;\n        this.idade = idade;\n        // elimina essas cargas colocando o public no construtor\n        //this.nome = nome;\n        //this.idade = idade;\n    }\n    info() {\n        return `meu nome é ${this.nome} e minha idade é de ${this.idade}`;\n    }\n}\n\n\n//# sourceURL=webpack://typescript2/./src/classes/candidato.ts?");

/***/ }),

/***/ "./src/constantes.ts":
/*!***************************!*\
  !*** ./src/constantes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"name\": () => (/* binding */ name)\n/* harmony export */ });\nconst name = 'Fernando TESTE';\n\n\n//# sourceURL=webpack://typescript2/./src/constantes.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constantes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constantes */ \"./src/constantes.ts\");\n/* harmony import */ var _classes_candidato__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/candidato */ \"./src/classes/candidato.ts\");\n//importa uma constante\n\n//importa uma classe\n\nconst candidato = new _classes_candidato__WEBPACK_IMPORTED_MODULE_1__.Candidato(_constantes__WEBPACK_IMPORTED_MODULE_0__.name, 49);\n// mostra a propiredade info\nconsole.log(candidato.info());\n// mostra o conteudo da classe\nconsole.log(candidato);\n\n\n//# sourceURL=webpack://typescript2/./src/index.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;