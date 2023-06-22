//Typescript is an open source coding language created by Microsoft
//It has very strong and precise compiling and it basically adds new features to JavaScript

//The aim of Typescript is making our Javascript code less prone to error and more coincise
//Let's make an example

//We have a generic function that just adds two values

function generic(a, b) {
	return a + b;
}

//As we know, the plus + operator is equal to algebric addition but it is also used in programming to concatenate strings
//Let's say the generic() function above was created by a colleague that aimed to just add 2 numbers.
//What if we don't know what this function's purpose is and we want to export it and use it somewhere else to, for example, concatenate 2 strings?
//Thanks to Typescript's types we can make sure that only numbers are passed as arguments to this function!

//Let's make a simple addition calculator to clarify the example

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const result = document.querySelector(".screen");

function addNumbers(a, b) {
	console.log(a + b);
	result.innerHTML = a + b;
}

button.addEventListener("click", () =>
	addNumbers(firstInput.value, secondInput.value)
);

//By adding 2 numbers, we can see that they get concatenated so 5 + 6 is 56
//That means we are working with a type error because that's not the behavior we expect
//The inputs actually return strings

// This can of corse be solved by writing the addNumbers function like this:
function addNumbersFix(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		screen.innerHTML = a + b;
	} else {
		screen.innerHTML = parseInt(a) + parseInt(b);
	}
}
//But it is much more verbose and a bit overkill
