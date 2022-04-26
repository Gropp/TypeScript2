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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n//carrega o tag form e a\n// os elementos nao os ids\n// a constante form pode receber o HTMLELement ou null\n// para tirar essa opcao de null, se coloca uma exclamacao no final\n// objetos nulos dao problema com o metodo link.addEventListener.\n// vc chamando as ancoras tambem consolida que o elemento selecionado é com certeza um elemento HTML\nconst form = document.querySelector('form');\nconst link = document.querySelector('a');\n//uma forma de fazer essa classificacao com ids e classes das tags, da para declara da seguinte forma:\n//deixando clara essa relacao do elemento com um html elemento, as funcionalidades do DOM nao terao\n//nenhum tipo de erro\nconst alias = document.querySelector('my-link');\nlink.addEventListener('click', () => {\n    console.log('click');\n});\n\n\n//# sourceURL=webpack://typescript2/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;