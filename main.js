//Constant variable (The value of this variable can't be changed in any condition.)
const a = 2; //Number
const f = 2.5 //Number, in JavaScript there is no different data types for integer and floating point (Decimal).

/*
'let' and 'var' works exactly the same way but in the new version of 
ECMAScript(ES6/ECMAScript 2015), 'let' is encouraged over 'var' for best coding practice.
*/
let b = 'Hello World'; //String
let val1 = true; //Boolean
let val2 = undefined; //Undefined
let val3 = null; //Object
let person = {
  name: 'Avijit Ghosh', //In an object the data is considered as "{Key: 'Value'}" pair.
  age: 23
}; //Object

//Dot Notation for accessing objects
person.name = 'Avijit'; //Assigning a new value to name (key) in 'person' object.

//Bracket Notation for accessing objects
let Name = 'name';
person['name'] = 'Ghosh'; //Directly using key inside the brckets with a single quotaion.
person[Name] = 'A.Ghosh'; //Using a variable that stores the key.

/*
This is an Array, this is a very important part of Data Structure.
An array is basically an object in JS that can store multiple value of same and different data types.
*/
let arr = [1, 2, 3, 4]; //Object: [Array]

//Asssigning 5th and 6th index value to the array.
arr[4] = 5;
arr[5] = 'Mango';

// Printing using Template Literals -> '`${}`' and typeof operator through a function.
//'typeof' operator displays the type of the data e.g string, number.
function logging() {
  console.log(`${a}: ${typeof a}`);
  console.log(`${f}: ${typeof f}`);
  console.log(`${b}: ${typeof b}`);
  console.log(`${val1}: ${typeof val1}`);
  console.log(`${val2}: ${typeof val2}`);
  console.log(`${val3}: ${typeof val3}`);
  console.log(`${person.name}: ${typeof person}`);
  console.log(`${arr}: ${typeof arr}`);
}

logging();

//Passing parameters in a function
/*
function functionName(Parameter1, Parameter2, ..) --> Parameter works as a variable that passes through 
the function body and used by the statements inside the function body.
*/
function greet(fname, lname) {
  console.log('Hello ' + fname + ' ' + lname); //Normal syntax
  console.log(`Hello ${fname} ${lname}`); //String Interpolation/Template Literal syntax
}

//calling a function
greet('Avijit', 'Ghosh'); //NOTE: The value we put here is called 'Argument' for parameters.

function sqr(num) {
  return num * num; //It returns the value of the code inside the function after calling the function.
}

console.log(sqr(5));

//------------------ Arithmetic Operator ------------------//

let num1 = 4;
let num2 = 2;
let numTxt = '1';

console.log('\n' + (num1 + num2) + ': Addition'); //Addition Operator
console.log(num1 - num2 + ': Subtraction'); //Subtraction Operator
console.log(num1 * num2 + ': Multiplication'); //Multiplication Operator
console.log(num1 / num2 + ': Divition'); //Divition Operator
console.log(num1 % num2 + ': Modulus'); //Modulus Operator, it gives the remainder of a divition.
console.log(num1 ** num2 + ': Exponentiation'); //Exponentiation Operator, 2nd value is the power of the 1st value e.g 'num1^num2'.

console.log(num1++ + ': Increment later'); //Increment Operator, first output the value then. 
console.log(num1); // increment and output the increased value in the next call.

console.log(num1-- + ': Decrement later'); //Decrement Operator, first output the value then.
console.log(num1); // decrement and output the decreased value in the next call.

console.log(++num1 + ': Increment first'); //Increment Operator, increment first then output the value.
console.log(--num1 + ': Decrement first'); //Decrement Operator, decrement first then output. the value.

// Unary Operator (Arithmetic Operator)
console.log(-numTxt + ': Unary Negation'); //Unary Negation, converts any non-number to a negative number.
console.log(+numTxt + ': Unary Plus'); //Unary Plus, converts any non-number to a possitive number.

//For more details go to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//------------------ Assignment Operator ------------------//

let s = 10; //Assignment Operator  
let n = 5;

console.log(`\n${s}`); //NOTE: '\n' --> New line
console.log((s += 5) + ': Addition Assignment'); //Addition Assignment Operator, it increases by given value and assign it.
console.log((s -= 5) + ': Subtraction Assignment'); //Subtraction Assignment Operator, it decreases by given value and assign it.
console.log((s *= 5) + ': Multiplication Assignment'); //Multiplication Assignment Operator, it multiplies by given value and assign it.
console.log((s /= 5) + ': Divition Assignment'); //Divition Assignment Operator, it divides by given value and assign it.
console.log((s %= 5) + ': Modulus Assignment'); //Modulus Assignment Operator, it mods by given value and assign it.
console.log(`${(n **= 5)}: Exponentiation Assignment`); //Exponentiation Assignment Operator, it exponentiate by given value and assign it.

//------------------ Comparison Operator ------------------//

//Relational Operators
console.log(`\n${person.age > 23}`); 
console.log(person.age >= 23);
console.log(person.age < 23);
console.log(person.age <= 23);

// Equality Operators
console.log('\n' + (person.age == '23') + ': =='); //Checks if the value is equal irrespective of the type.
console.log((person.age === '23') + ': ==='); //Strictly checks if the value is equal with respect to the type.
console.log((person.age != '23') + ': !='); //Checks if the value is not equal irrespective of the type.
console.log((person.age !== '23') + ': !=='); //Strictly checks if the value is not equal with respect to the type.

//------------------ Ternary Operator (?)------------------//

// In this example, if the customer has more than 110 points then he/she will be Gold otherwise silver.
let points = 120;
let customer = points > 110 ? 'Gold' : 'Silver'; //Works as a short If/Else statement.

console.log(`\nCustomer: ${customer}\n`);

//------------------ Logical Operator ------------------//

//Logical AND Operator --> &&
let hsScoreAND = 40;
let graduateAND = true;

//If both conditions are true then this will be true otherwise false.
let eligibilityAND = (hsScoreAND >= 50) && (graduateAND == true);
let isEligibleAND = eligibilityAND == true ? 'Eligible' : 'Not eligible';

console.log(isEligibleAND);

//Logical OR Operator --> ||
let hsScoreOR = 40;
let graduateOR = true;

//If any one condition is true then this will be true otherwise false.
let eligibilityOR = (hsScoreOR >= 50) || (graduateOR == true);
let isEligibleOR = eligibilityOR == true ? 'Eligible' : 'Not eligible';

console.log(isEligibleOR);

// Logical NOT Operator --> !
//Any value will be opposite of what it is, e.g true = false.
//NOTE: Value will always be converted to boolean type.
let admissionRefused = !eligibilityOR;
let welcomeMsg = admissionRefused == false ? 'Welcome aboard' : 'Sorry!';

console.log(admissionRefused, welcomeMsg);

/*
Falsy value in JavaScript -->
-> undefined
-> null
-> 0
-> ''
-> false
-> NaN
NOTE: Any value other than these are truthy.
*/

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; //As soon as the interpreter finds a truthy value it returns that immidietly.

/*
No matter how many truthy value are there, 
as soon as the interpreter finds a truthy value every value following will be ignored.
This is called 'Short-circuiting' in programming.
*/
console.log((currentColor || 'Hello') + ': Short-circuiting\n');

//------------------ Bitwise Operator ------------------//

//Bitwise AND Operator --> &
/* 
156 64 32 16 8  4  2  1 -> Bit location
0  0  0  0  0  0  0  0  -> 1 to be placed for calculating the decimal number in binary.
*/
let byt_1 = 1; //00000001 -> This is a Byte, 1 Byte = 8 Bit
let byt_2 = 2; //00000010
let byt_3 = 3; //00000011

console.log((byt_1 & byt_2 ) + ': &'); //Output -> 0 -> (00000001 * 00000010) = 00000000
console.log((byt_2 & byt_3 ) + ': &'); //Output -> 2 -> (00000010 * 00000011) = 00000010

//Bitwise OR Operator --> |
let byt_4 = 4; //00000100
let byt_5 = 5; //00000101

/*
It compares both bytes and give priority to 1 over 0 and 
returns it in the respective place.
*/
console.log((byt_4 | byt_5 ) + ': |'); //Output -> 5 -> 00000101

//Challenge --> Swapping values
let color1 = 'red';
let color2 = 'blue';
let swap = color1;
color1 = color2;
color2 = swap;

console.log(color1);
console.log(color2 + '\n');

//------------------ Conditional Statement ------------------//

//If and else

/*
If it's 6am to 12pm then 'Good Morning!',
if it's 12pm to 6pm then 'Good Afternoon!',
otherwise 'Good Evening!'.
*/
let hour = 24; //24-hour format

if (hour >= 6 && hour < 12) {
  console.log('Good Morning!');
}
else if (hour >= 12 && hour < 18) {
  console.log('Good Afternoon!');
}
else {
  console.log('Good Evening!');
}

//Switch and case

let role = 'moderator';

switch (role) {
  case 'guest':
    console.log('Guest user');
    break;

  case 'moderator':
    console.log('Moderator user');
    break;

  default:
    console.log('Unknown user');
}

//------------------ Loop Statement ------------------//

//For

//Number table
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let k = i * j;
    console.log(`${i} x ${j}: ${k}`);
  }
  console.log('\n');
}

//Running the loop from reverse
// for (let i = 1000; i >= 1; i--) {
//   for (let j = 1; j <= 10; j++) {
//     let k = i * j;
//     console.log(`${i} x ${j}: ${k}`);
//   }
//   console.log('\n');
// }

//Finding odd and even number withing a range
for (let i = 0; i <= 100; i++) {
  if ((i % 2) == 0) {
    console.log('Even', i);
  }
  else {
    console.log('Odd', i);
  }
}
console.log('\n');

//While

//Number table
let i = 1; //In while loop, we need to assign starting value outside the loop.

while (i <= 10) { //Only Ending value sits at start of the loop.
  let j = 1;
  while (j <= 10) {
    let k = i * j;
    console.log(`${i} x ${j}: ${k}`);
    j++; //And we need to declare increment/decrement inside the loop body. 
  }
  console.log('\n');
  i++;
}

//Finding odd and even number within a range
let x = 0;

while (x <= 100) {
  if (x % 2 === 0) {
    console.log('Even', x);
  }
  else {
    console.log('Odd', x);
  }
  x++;
}

console.log('\n');

//Do-while

//Finding odd and even number within a range
/*
Statements always run once, even if the condition is false. 
*/
let y = 101;

do {
  if (y % 2 === 0) {
    console.log('Even', y);
  }
  else {
    console.log('Odd', y);
  }
  y++;
} 
while (y <= 100);

console.log('\n');

//Infinite Loop
//Using While loop --> 1
// let z = 0;

// while(z < 2) {
//   console.log(z);
// }

//Using While loop --> 2
// while(true) {
//   console.log(z);
// }

//Using Do-while loop --> 1
// do {
//   console.log(z);
// }
// while(z < 2);

//Using Do-while loop --> 2
// do {
//   console.log(z);
// }
// while(true);

//Using For loop
// for (z = 0; z > 0; i++) {
//   console.log(z);
// }

//For-in

/*
In For-in loop only two parts are there,
first is the loop variable and second is the name of an object.
With this loop we can look throughout an object and return its properties (keys)
or its values or both.
*/
for (let key in person) {
  console.log(key, person[key]); //To output value of a key bracket notation is used because dot notation doesn't work here.
}

//Iterate over an array using For-in loop
let softDrinks = ['Coca-Cola', 'Pepsi', 'Thumbs Up', 'Mirinda'];

// for (let index in softDrinks) {
//   console.log(`${index}, ${softDrinks[index]}`);
// }

console.log('\n');

//For-of

/*
Best suited for iterate over an array.
Introduced in ES6.
*/
for (let drinks of softDrinks) {
  console.log(drinks);
}

console.log('\n');

//Break and continue

let i2 = 10;

for (i2 = 0; i2 < 10; i2++) {
  if (i2 === 5) {
    break; //To jump out of a loop this is used.
  }
  console.log(i2);
}

console.log('\n');

for (i2 = 0; i2 < 10; i2++) {
  if (i2 % 2 == 0) {
    continue; //To continue from next to the executed condition.
  }
  console.log(i2);
}

console.log('\n');

//------------------ Objects ------------------//

let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('Draw');
  }
}

circle.draw(); //Function inside an object is called Method
console.log('\n');

//Factory function

function createCircle(radius) {
  return {  //We don't want to call the circle object directly anywhere outside the function so we can simply return it.
    radius, //If key and value are same then this syntax can be used. This syntax is introduced in ES6.
    draw() {  //This syntax for method is also introduced in ES6.
      console.log('Draw');
    }
  }
}

const circle1 = createCircle(1)
console.log(circle1);
console.log('\n');

//Constructor Function

function Circle(radius) { //In constructor functions Pascal Case should be used to name the functions.
  this.radius = radius;
  this.draw = function() {
    console.log('Draw');
  }
}

const circle2 = new Circle(2);
console.log(circle2);
console.log('\n');

//Delete in Objects
const pizza = {
  size: 'medium',
  toppings: ['pepperony', 'cheese', 'meatballs']
}

pizza.coupon = 'special30';
pizza.price = function() { 
  return `$${20}`;
};

delete pizza.coupon; //To delete keys in Objects

console.log(pizza);
console.log('\n');

//Constructor Properties
//JavaScript engine interpret const obj = {}; using this syntax
const Obj = new Object(); //This is the Constructor Property for creating Objects

//JavaScript has other built-in constructor to create
new String();
new Boolean();
new Number();
new Function(); //funtions are Objects too

//function constructor
const BurgerCons = new Function('type', `
  this.type = type;
  this.costGen = function() {
    return this.type;
  }
`);

const burger = new BurgerCons('Cheese');
console.log(burger);

console.log('\n')

function Triangle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Draw');
  }
  return this;
}

// const triangle = new Triangle(3);

/*
  This line does exactly the same as the line before.
  '{}' sets the target of 'this' to the constructed Object.
  By deafult the target of 'this' is 'window' (global Object).
*/
// const triangle = Triangle.call({}, 3); //'call' method takes multiple arguments to pass to the contsructor function
const triangle = Triangle.apply({}, [3]); //'apply' method takes single array of arguments to pass to the contsructor function
console.log(triangle);

console.log('\n');

//Ways to iterate over an Object using for..of loop
const vector = {
  x: {
    right: 0,
    left: 0
  },
  y: {
    top: 0,
    bottom: 0
  },
  z: {
    inside: 0,
    outside: 0
  }
};

/*
  Object.keys() method returns an Array 
  of keys (properties) of the given Object.

  NOTE: 'for (let key of vector) {...}' will not work and through an error.
  Because Objects are not iteratable.
*/
for (let key of Object.keys(vector)) {
  console.log(key);
}

/*
  Object.entries() method returns an Array
  of key-value pair of the given Object.
*/
for (let key of Object.entries(vector)) {
  console.log(key);
}

//'in' Operator 
/* 
  It confirms the existence of the property in
  an Object.
*/
if ('x' in vector)
  console.log(vector.x);
else
  console.log('Not Found');

console.log('\n');

//Cloning an Object
//Old way -->
// const anotherVector = {};

// for (let key in vector) {
//   anotherVector[key] = vector[key];
// }

// console.log(anotherVector);

//Modern way -->
/*
'Object.assign()' method takes a empty Object or an existing non-empty object as its first parameter.
In this Object (First parameter), the assignment of key-value pair will happen.
After the first parameter, Object(s) from where the key-value pair will be copied are placed.
Multiple Objects can be added for copying key-value pair.

NOTE: If no Objects are predefined, then using '{}' as first parameter will create an empty Object.
*/
// const anotherVector = Object.assign({}, vector);
// console.log(anotherVector);

//Modern and efficient way -->

// Spread Operator
/*
'...' it spreads the value of an Array or key-value of an Object accordingly in the respecred place.
-> An Array of values can be shared accordingly between a function's parameters.
-> For copying an Object to another. Example below -->
*/
const anotehrVector = { ...vector };
console.log(anotehrVector);
console.log('\n');

//Date() constructor
let date = new Date();
date.setFullYear(2018); //To set full year value.
let isoDate = date.toISOString(); //ISO format date. Useful to send date information to Backend.
console.log(isoDate);