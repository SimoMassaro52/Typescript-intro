//This is just the list of ALL the types present in regular JavaScript

//PRIMITIVES:

//Boolean
const boolean1 = true;
const boolean2 = false;

//Number
const fiftyFive = 55;

//String
const name = "Tom";

//BigInt(a number too large to be a number type)
const bigNumber = BigInt("1905801537164914619");
//console.log(bigNumber); // === 1905801537164914619n

//Symbol(a value made to be unique and immutable, it is useful to set the key of an object which has to be unique)
const symbol = Symbol();

//Undefined
const undefinedValue = undefined;

//STRUCTURAL TYPES

//Object
const myObject = { key: "value" };

//Function
const myFunction = () => {
	return "Hello this is a function";
};

//STRUCTURAL ROOT PRIMITIVE

//Null
const nothing = null;
//Let's take some time to explain the difference between undefined and null
//undefined is a falsey value that ECMAScript assigns automatically to a variable if no value is given to it
//Ex.
let unassigned;
// console.log(unassigned);

//null, on the other hand, is also a falsey value but it is programatically assigned or returned by the coder just because maybe that operation at the time isn't supposed to return anything and will be emptyd

//Each of these variables's value can be checked by using the typeof keyword in front of it
//Ex.
// console.log(typeof myFunction);
