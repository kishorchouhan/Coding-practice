/**
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

// Runtime: 80 ms, faster than 69.96% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40.4 MB, less than 14.57% of JavaScript online submissions for Valid Parentheses.

var isValid = function(s) {
    let brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let openB = "([{";
    let closeB = ")]}";
    let lastOpen = ""
    for(let i = 0; i < s.length ; i++){
        let currentChar = s[i];
        let currentCharType = Object.keys(brackets).includes(currentChar) ? "open" : "close";

        if(currentCharType === "open"){
            lastOpen += currentChar;
        }else if(currentCharType === "close"){
            if(brackets[lastOpen[lastOpen.length - 1]] === currentChar){
                lastOpen = lastOpen.slice(0, -1);
            }else{
                return false;
            }
        }
    }
    return lastOpen.length === 0 ? true : false;
};