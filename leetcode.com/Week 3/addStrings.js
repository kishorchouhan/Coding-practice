/**
415. Add Strings

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
 

Follow up: Could you solve it without using any built-in BigInteger library or converting the inputs to integer directly?
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// Runtime: 92 ms, faster than 68.39% of JavaScript online submissions for Add Strings.
// Memory Usage: 40.6 MB, less than 83.35% of JavaScript online submissions for Add Strings.

var addStrings = function(num1, num2) {
    let sum = "";
    let n1 = num1.length-1;
    let n2 = num2.length-1;
    let carry = 0;
    while(n1 >= 0 || n2 >= 0){
        let nums1 = n1 >= 0 ? parseInt(num1[n1--]) : 0;
        let nums2 = n2 >= 0 ? parseInt(num2[n2--]) : 0;
        
        let s = carry + nums1 + nums2;
        sum = (s%10) + sum;
        carry = Math.floor(s/10);
    }
    return carry === 0 ? sum : carry + sum;
};