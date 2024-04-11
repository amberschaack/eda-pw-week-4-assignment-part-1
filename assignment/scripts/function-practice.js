console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name = 'stranger') {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('in helloName function:');
console.log(helloName('Amber'));
console.log(helloName());
// Added a default to 'name' so that undefined is not returned if a name is not given.

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('in addNumbers function:');
console.log(addNumbers(3, 5));
console.log(addNumbers(145, 732));
console.log(addNumbers(0.478, 976));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('in multiplyThree function:');
console.log(multiplyThree(3, 7, 10));
console.log(multiplyThree(3.6, 7.2, 10.5));
console.log(multiplyThree(-3, 75, 9.3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('in isPositive function:');
console.log(isPositive(5));
console.log(isPositive(-5));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length <= 0) {
    return 'undefined';
  }
  return array[array.length - 1];
}
console.log('in getLast function:');
let drinksArray = ['water', 'pop', 'juice'];
console.log(getLast(drinksArray));
let emptyArray = [];
console.log(getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
console.log('in find function:');
let numbersOne = [5, 7, 9, 2];
console.log(find(7, numbersOne));
console.log(find(4, numbersOne));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}
console.log('in isFirstLetter function:');
let string1 = 'welcome to the jungle';
console.log(isFirstLetter('w', string1));
console.log(isFirstLetter('t', string1));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
console.log('in sumAll function:');
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
console.log(sumAll(array1));
console.log(sumAll(array2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  const positives = array.filter((num) => num > 0);
  return positives;
}
console.log('in allPositive function:');
let numbersArray = [-1, 0, 1, 2, -5, 7];
console.log(allPositive(numbersArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
/*
The task was to create a function that returned the amount of 'true' occurances in an array.
In order to keep track of the occurances, I declared a variable called 'count' and added to that count whenever the current index was equal to true.
I initiated the count to be 0 so that if an empty array is passed, then 0 will still be returned.
Finally, I returned the count so when I console log my function it will return a number.
*/
function countTrue(array) {
  let count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
  }
  return count;
}
console.log('in countTrue function:');
let trueArray = [true, false, true, true, false];
console.log(countTrue(trueArray));
let emptyArray1 = [];
console.log(countTrue(emptyArray1));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
