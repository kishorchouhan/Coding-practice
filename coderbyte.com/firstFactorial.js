// First Factorial
// Description: For this challenge you will be determining the factorial for a given number.

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
// For the test cases, the range will be between 1 and 18 and the input will always be an integer.

// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320

function FirstFactorial(num) {
  var result = 1;
  for (num; num > 1; num--) {
    result *= num;
  }
  // code goes here
  return result;
}

// keep this function call here
console.log(FirstFactorial(8));
