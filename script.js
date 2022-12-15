// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
function min(num1, num2) {
  // check if num1 is less than num2
  if(num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(min(20,10,));
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10


// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference 
(the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
 
  console.log(Math.PI);
  // expected output: 3.14159265358979
  console.log(calculateCircumference(5));
// expected output: 31.41592653589793  
// console.log(calculateCircumference(5)); // will output 31.4


// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
function char_count(str, letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(char_count('mississippi', 'i'));
console.log(char_count('mississippi', 'o'));
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
