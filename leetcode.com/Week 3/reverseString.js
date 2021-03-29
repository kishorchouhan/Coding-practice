/**
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Runtime: 104 ms, faster than 90.71% of JavaScript online submissions for Reverse String.
// Memory Usage: 45.5 MB, less than 90.84% of JavaScript online submissions for Reverse String.

var reverseString = function(s) {
    for(let i = 0; i < Math.floor(s.length/2); i++){
        let val = s[i];
        s[i] = s[s.length-i-1]
        s[s.length-i-1] = val;
    }
    return s;
};