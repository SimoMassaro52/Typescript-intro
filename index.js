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
