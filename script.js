// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
console.log(Math.min(10,6,));
// expected output: 6

// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
 
  console.log(Math.PI);
  // expected output: 3.14159265358979

  console.log(calculateCircumference(5));
// expected output: 31.41592653589793  

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

