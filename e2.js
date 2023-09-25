//Exercise #2
//Objective: Understand and Apply Destructuring in JavaScript.

//Destructure the person object to extract the name and age properties into variables.
//Use array destructuring to get the second and fourth items from the fruits array.
//Extract the city and country properties from the address object nested within the person object using nested destructuring.

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};


//Destructure the person object to extract the name and age properties into variables.
const {name, age} = person;

//Use array destructuring to get the second and fourth items from the fruits array.
const fruits = ['apple', 'banana', 'cherry', 'date'];

const [, second, , fourth] = fruits;

console.log(second);
console.log(fourth); 



//Extract the city and country properties from the address object nested within the person object using nested destructuring.
const  {address: {city, country}} = person;
