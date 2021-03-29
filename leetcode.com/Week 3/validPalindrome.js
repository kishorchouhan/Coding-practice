/**
125. Valid Palindrome

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

// Runtime: 92 ms, faster than 82.00% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 40.7 MB, less than 92.45% of JavaScript online submissions for Valid Palindrome.

var isPalindrome = function(s) {
    let alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let startI = 0;
    let endI = s.length - 1;
    while(startI < endI){
        if(alphaNum.includes(s[startI]) && alphaNum.includes(s[endI])){
            if(s[startI].toLowerCase() === s[endI].toLowerCase()){
                startI++;
                endI--;
            }else{
                return false;
            }
        }else if(!alphaNum.includes(s[startI])){
            startI++;
        }else if(!alphaNum.includes(s[endI])){
            endI--;
        }
    }
    return true;
};