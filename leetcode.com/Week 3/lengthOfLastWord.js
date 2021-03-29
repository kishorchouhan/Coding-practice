/**
58. Length of Last Word

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
*/

/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 72 ms, faster than 91.94% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 38.9 MB, less than 23.49% of JavaScript online submissions for Length of Last Word.

var lengthOfLastWord = function(s) {
    let wordLength = 0;
    for(let i = s.length-1; i >= 0; i--){
        if(wordLength > 0 && s[i] === " "){
            return wordLength;
        }else if(s[i] !== " "){
            wordLength++;
        }
    }
    return wordLength;
};