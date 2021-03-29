/**
345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */

// Runtime: 192 ms, faster than 13.00% of JavaScript online submissions for Reverse Vowels of a String.
// Memory Usage: 44 MB, less than 88.49% of JavaScript online submissions for Reverse Vowels of a String.

var reverseVowels = function(s) {
    let vowel = "aeiouAEIOU";
    let startI = 0;
    let endI = s.length-1;
    while(startI < endI){
        if(vowel.includes(s[startI]) && vowel.includes(s[endI])){
            s = s.substring(0, startI) + s[endI] + s.substring(startI+1, endI) + s[startI] + s.substring(endI+1);
            startI++;
            endI--;
        }else if(!vowel.includes(s[startI])){
            startI++;
        }else if(!vowel.includes(s[endI])){
            endI--;
        }
    }
    return s;
};