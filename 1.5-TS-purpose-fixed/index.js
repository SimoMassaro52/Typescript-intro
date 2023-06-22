"use strict";
//This js file was generated after running tsc index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
var button = document.querySelector(".button");
var firstInput = document.querySelector("#first-input");
var secondInput = document.querySelector("#second-input");
exports.result = document.querySelector(".screen");
function addNumbers(a, b) {
	exports.result.innerHTML = (a + b).toString();
}
button.addEventListener("click", function () {
	return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));
});
