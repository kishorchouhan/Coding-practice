/**
509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Constraints:

0 <= n <= 30
*/

/**
 * @param {number} n
 * @return {number}
 */

// O(n) Solution
// Runtime: 76 ms, faster than 81.74% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.3 MB, less than 61.15% of JavaScript online submissions for Fibonacci Number.

// 0,1,1,2,3,5,8,13,21

var fib = function(n) {
    let secLast = 0;
    let last = n === 0 ? 0 : 1;
    for(let i = 2; i < n; i++){
        let s = secLast + last;
        secLast = last;
        last = s;
    }
    return secLast + last;
};

// O(1) solution:
// Formula to find Fibonacci Number:
// F(n) = ( (1+sqrt(5))^n - (1-sqrt(5))^n ) / (2^n * sqrt(5))

var fib = function(n) {
    let a = Math.pow(1+Math.sqrt(5), n);
    let b = Math.pow(1-Math.sqrt(5), n);
    let c = Math.pow(2, n) * Math.sqrt(5);
    return (a-b)/c
};