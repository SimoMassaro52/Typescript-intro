//Now that we have turned this js file into ts, let's fix it

const button = document.querySelector(".button");
//The first thing is specifying that the element we are pointing at in our HTML is in fact an input element
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
//Exporting this result variable so it can be used in the scope of the function below
export const result = document.querySelector(".screen");

//Now we can finally specify the function to accept only numbers as arguments
function addNumbers(a: number, b: number) {
	//But since the HTML element expects strings, we need to return the result as a string
	//We also need to add a ! operator after result since we know it's not going to be null or undefined after the scripts runs, same for button
	result!.innerHTML = (a + b).toString();
}

button!.addEventListener("click", () =>
	//And since the function expects numbers, we need to convert the values of the inputs into numbers through parseInt()
	addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);

//Not we just need to run tsc index.ts to make it readable by our .html file
