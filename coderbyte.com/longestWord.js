// Longest Word
// Description: For this challenge you will be determining the largest word in a string.

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

// Examples:

// Input: "fun&!! time"
// Output: time

// Input: "I love dogs"
// Output: love

function LongestWord(sen) {
  let count = 0;
  let maxCount = 0;
  let senArr = sen.split("");
  let word = [];
  let maxWord = [];
  for (let i = 0; i < senArr.length; i++) {
    if (
      (senArr[i].charCodeAt() >= 65 && senArr[i].charCodeAt() <= 90) ||
      (senArr[i].charCodeAt() >= 97 && senArr[i].charCodeAt() <= 122) ||
      (senArr[i].charCodeAt() >= 48 && senArr[i].charCodeAt() <= 57)
    ) {
      count += 1;
      word.push(senArr[i]);
      if (i === senArr.length - 1 && count > maxCount) {
        maxWord = word;
        maxCount = count;
      }
    } else {
      if (count > maxCount) {
        maxWord = word;
        maxCount = count;
      }
      count = 0;
      word = [];
    }
  }
  let result = maxWord.join("");
  // code goes here
  return result;
}

// OR

// function LongestWord(sen) {
//   let count = 0;
//   let maxCount = 0;
//   let senArr = sen.split("");
//   let word = [];
//   let maxWord = [];
//   for(let i = 0; i<senArr.length; i++){
//     if ((senArr[i] >= 'a' && senArr[i] <= 'z') || (senArr[i] >= 'A' && senArr[i] <= 'Z') || (senArr[i] >= 0 && senArr[i] <= 9)){
//       count += 1;
//       word.push(senArr[i])
//       if (i === (senArr.length - 1) && count > maxCount) {
//         maxWord = word
//         maxCount = count
//       }
//     }else {
//       if (count > maxCount) {
//       maxWord = word
//       maxCount = count
//       }
//       count = 0
//       word = []
//     }
//   }
//   let result = maxWord.join("")
//   // code goes here
//   return result;
// }

// keep this function call here
console.log(LongestWord("Argument goes here"));
