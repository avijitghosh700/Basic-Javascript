//Exercise
/*
  Write a function to display all the key-value pair
  of 'address' Object.
*/
// const address = {
//   street: 'Foridpur Block',
//   city: 'Howrah',
//   zipCode: 711110
// };

// function showAddress() {
//   console.log(address);
// }
// showAddress();

//Using constructor function
function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zipCode = zip;
}

const address = new Address('Foridpur Block', 'Howrah', 711110);
console.log(address);
console.log('\n');

/* 
  Write two function to check equality and reference between Objects

  Explanation ->
  * Check if the Objects has the exact same key (property).
  * Check if the Objects has the exact same reference. 
  It compares if the Objects are in the same memory location or not.
*/
const address1 = new Address('Elgin Road', 'Kolkata', 744440);
const address2 = new Address('Park Street', 'Kolkata', 755550);

function isEqual(address1, address2) {
  let equal;

  for (let key1 in address1) {
    for (let key2 in address2) {
      if (key1 === key2)
        equal = true;
      else
        equal = false;
    }
  }
  console.log(equal);
}

function isSame(address1, address2) {
  console.log(address1 === address2);
}

isEqual(address1, address2);
isSame(address1, address2);