// Letter Changes

// Description: For this challenge you will be manipulating characters in a string based off their positions in the alphabet.

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Examples:

// Input: "hello*3"
// Output: Ifmmp*3

// Input: "fun times!"
// Output: gvO Ujnft!

function LetterChanges(str) {
  let strArr = str.toLowerCase().split("");
  strArr = strArr.map(x => {
    // if((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z')){
    if (
      (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) ||
      (x.charCodeAt() >= 97 && x.charCodeAt() <= 122)
    ) {
      if (x === "z") {
        return "a";
      }
      return String.fromCharCode(x.charCodeAt() + 1);
    }
    return x;
  });

  let vowel = "aeiou";

  let result = strArr
    .map(x => (vowel.includes(x) ? x.toUpperCase() : x))
    .join("");

  // code goes here
  return result;
}

// keep this function call here
console.log(LetterChanges("Argument goes here"));
