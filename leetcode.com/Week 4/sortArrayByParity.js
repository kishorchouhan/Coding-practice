/**
905. Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

// Runtime: 96 ms, faster than 73.24% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 40.1 MB, less than 98.04% of JavaScript online submissions for Sort Array By Parity.
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length - 1;
    while(i < j){
        if(A[i] % 2 === 0){
            i++;
            continue;
        }else{
            let oddNo = A[i];
            A[i] = A[j];
            A[j] = oddNo;
            j--
        }
    }
    return A
};