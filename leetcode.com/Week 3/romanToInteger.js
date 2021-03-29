/**
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 172 ms, faster than 56.84% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 46.1 MB, less than 26.24% of JavaScript online submissions for Roman to Integer.

var romanToInt = function(s) {
    let romanNo = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let no = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "I" && i !== s.length-1 && (s[i+1] === "V" || s[i+1] === "X")){
            if(s[i+1] === "V"){
                no += 4
            }else if(s[i+1] === "X"){
                no += 9
            }
            i++
        }else if(s[i] === "X" && i !== s.length-1 && (s[i+1] === "L" || s[i+1] === "C")){
            if(s[i+1] === "L"){
                no += 40
            }else if(s[i+1] === "C"){
                no += 90
            }
            i++
        }else if(s[i] === "C" && i !== s.length-1 && (s[i+1] === "D" || s[i+1] === "M")){
            if(s[i+1] === "D"){
                no += 400
            }else if(s[i+1] === "M"){
                no += 900
            }
            i++
        }else{
            no += romanNo[s[i]];
        }
    }
    return no;
};

// Solution 2:

// Runtime: 168 ms, faster than 62.79% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 44.9 MB, less than 80.69% of JavaScript online submissions for Roman to Integer.

var romanToInt = function(s) {
    let romanNo = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let no = romanNo[s[s.length-1]];
    
    for(let i = s.length - 2; i >= 0; i--){
        if(romanNo[s[i]] < romanNo[s[i+1]]){
            no -= romanNo[s[i]];
        }else{
            no += romanNo[s[i]];
        }
    }
    return no;
};