//Exercise
/*
Write a function that takes two numbers and returns the maximum of the two
*/
let max = findGreater(100, 22);

function findGreater(x, y) {
  // if (x > y) {
  //   console.log(x);
  // }
  // else {
  //   console.log(y);
  // }
  return (x > y) ? x : y;
}

console.log(max + '\n');

/*
Write a function to check the orientation of given screen size
*/
let viewMode = orientation(1200, 720);

function orientation(width, height) {
  return (width > height) ? `${width} * ${height}: Landscape` : `${width} * ${height}: Portrait`;
}

console.log(viewMode + '\n');

/*
Write a function to check if the orientation of given screen size landscape or not
*/
function isLandscape(width, height) {
  return (width > height);
}

console.log(isLandscape(1600, 900) + '\n');

/*
Write a function to return a string for a number input

Explanation ->
  * Return Fizz if the input is divisible by 3
  * Return Buzz if the input is divisible by 5
  * Return FizzBuzz if the input is divisible by both
  * Return input value if it is not divisible by 3 or 5
  * Return 'Not a number' messege if input value is not a number 
*/
let FizzBuzz = fizzBuzz(100);

function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return NaN;
  }
  else if ((input % 3 === 0) && (input % 5 === 0)) {
    return 'FizzBuzz';
  }
  else if (input % 3 === 0) {
    return 'Fizz';
  }
  else if (input % 5 === 0) {
    return 'Buzz';
  }
  else {
    return input;
  }
}

console.log(FizzBuzz + '\n');

/*
Write a function to give messege based on driving speen (input)

Exlpanation ->
  * If the speed limit is below 75 then show 'OK'.
  * If the speed limit is above or equal to 75 then show 'Points: 1'.
  * For every 5km from 70km speed will give 1 points. e.g - 75km/s = 1 point, 80km/s = 2 points
  * If the collected points are more than 12 then show 'License Suspended'.
*/
function speedCheck(speed) {
  const speedLimit = 70;
  const speedPoint = 5;
  const points = Math.floor((speed - speedLimit) / speedPoint);

  if (speed < (speedLimit + speedPoint)) {
    console.log(`${speed}: OK`);
    // return;  //To work without Else block
  }
  else {
    if (points >= 12)
      console.log('License Suspended');
    else
      console.log(`Points: ${points}`);
  }

  // Without Else block
  // if (points >= 12)
  //   console.log('License Suspended');
  // else
  //   console.log(`Points: ${points}`);
}

speedCheck(170);

console.log('\n');

/*
Write a function to return all the Even and Odd numbers upto the input number
*/
function showEvenOdd(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i}: Even`);
    }
    else {
      console.log(`${i}: Odd`);
    }
  }
}

showEvenOdd(12);

console.log('\n');

/*
Write a function to return the number of all the truthy values in an array
*/
const arr2 = [undefined, null, 0, 1, 2, 'Avijit', NaN];

function countTruthy(arr2) {
  let count = 0;
  for (val of arr2) {
    if (val) {
      count++;
    }
  }
  return count;
}

console.log(countTruthy(arr2) + '\n');

/*
Write a function to return all the string properties of an object
*/
const obj = {
  name: 'Aaron',
  sex: 'Male',
  spouseName: 'Hanna',
  children: 2,
  hasCar: true,
  parentLifeStatus: 'Alive'
}

function showStrProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  console.log('\n');
}

showStrProperties(obj);

/*
Write a function to show grade of student's marks in subjects (input)

Grades ->
  * 1 - 59 --> F
  * 60 - 69 --> D
  * 70 - 79 --> C
  * 80 - 89 --> B
  * 90 - 100 --> A
*/
const marks = [90, 50, 70, 100];

function showGrades(marks) {
  const avg = calcAvg(marks);
  if (avg < 60) {
    console.log(`Average is ${avg}: F`);
  }
  else if (avg < 70) {
    console.log(`Average is ${avg}: D`);
  }
  else if (avg < 80) {
    console.log(`Average is ${avg}: C`);
  }
  else if (avg < 90) {
    console.log(`Average is ${avg}: B`);
  }
  else {
    console.log(`Average is ${avg}: A`);
  }
}

function calcAvg(markArr) {
  let sum = 0;
  for (let mark of markArr) {
    sum += mark;
  }
  return (sum / markArr.length);
}

showGrades(marks);

console.log('\n');

/*
Write a function to return the sum of multiples of 3 and 5 within a range (input)

Explanation ->
  * Multiples of 3 within 10 --> 3, 6, 9
  * Multiples of 5 within 10 --> 5, 10
  * So the output should be ((3 + 6 + 9) + (5 + 10)) = 33
*/
function multipleSum(limit) {
  let sumOfThrees = 0;
  let sumOfFives = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0) {
      sumOfThrees += i;
    }
    if (i % 5 === 0) {
      sumOfFives += i;
    }
  }

  let sum = (sumOfThrees + sumOfFives);
  console.log(`${sumOfThrees} + ${sumOfFives} = ${sum}`);

  // let sum = 0;

  // for (let i = 0; i <= limit; i++) {
  //   if ((i % 3 === 0) || (i % 5 === 0)) {
  //     sum += i;
  //   }
  // }

  // console.log(`The sum is: ${sum}`);
}

multipleSum(10);

console.log('\n');

/*
Write a function to return number of stars according to rows

Output will look like this-->
  *  
  * *
  * * *
  * * * *
  * * * * *
*/
function stars(starCount) {
  for (let i = 1; i <= starCount; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) {
      star += '*';
    }
    console.log(star);
  }
}

stars(20);

console.log('\n');

/*
Write a function to return all the prime and composite numbers of within a range (input)

Explanation ->
  * Prime Numbers --> Only divisible evenly by 1 and itself
  * Composite Numbers --> Divisible evenly by 1, itself and many numbers
  * Prime Numbers starts from 2
*/
// function primeComp(range) {
//   for (let number = 2; number <= range; number++) {
//     let checkPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         checkPrime = false;
//       }
//     }
//     if (checkPrime) {
//       console.log(`Prime Number: ${number}`);
//     }
//     else {
//       console.log(`Composite Number: ${number}`);
//     }
//   }
// }

// primeComp(50);

//Cleaner and reusable version
function primeComp(range) {
  for (let number = 2; number <= range; number++) {
    if (checkPrime(number)) {
      console.log(`Prime Number: ${number}`);
    }
    else {
      console.log(`Composite Number: ${number}`);
    }
  }
}

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

primeComp(10);
console.log('\n');