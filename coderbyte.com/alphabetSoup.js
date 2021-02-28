// Alphabet Soup

// Description: For this challenge you will be sorting characters in a string.

// Have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

// Examples

// Input: "coderbyte"
// Output: bcdeeorty

// Input: "hooplah"
// Output: ahhloop

function AlphabetSoup(str) {
  let result = str
    .split("")
    .sort()
    .join("");
  return result;
}

// keep this function call here
console.log(AlphabetSoup("Argument goes here"));
