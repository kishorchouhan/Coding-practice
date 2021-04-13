/**
888. Fair Candy Swap

Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

 

Example 1:

Input: A = [1,1], B = [2,2]
Output: [1,2]
Example 2:

Input: A = [1,2], B = [2,3]
Output: [1,2]
Example 3:

Input: A = [2], B = [1,3]
Output: [2,3]
Example 4:

Input: A = [1,2,5], B = [2,4]
Output: [5,4]
 

Note:

1 <= A.length <= 10000
1 <= B.length <= 10000
1 <= A[i] <= 100000
1 <= B[i] <= 100000
It is guaranteed that Alice and Bob have different total amounts of candy.
It is guaranteed there exists an answer.
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

// sol 1: best
// Runtime: 428 ms, faster than 42.42% of JavaScript online submissions for Fair Candy Swap.
// Memory Usage: 43.3 MB, less than 91.67% of JavaScript online submissions for Fair Candy Swap.
// sumA - x + y = sumB - y + x
// y = x + (sumA + sumB)/2

var fairCandySwap = function(A, B) {
    let sumA = A.reduce((a,c) => a + c)
    let sumB = B.reduce((a,c) => a + c)
    let diff = (sumB - sumA)/2;
    
    for(let i = 0; i < A.length; i++){
        if(B.includes(diff + A[i])){
            return [A[i], A[i] + diff]
        }
    }
};

//Sol 2
// Runtime: 116 ms, faster than 69.70% of JavaScript online submissions for Fair Candy Swap.
// Memory Usage: 44 MB, less than 66.67% of JavaScript online submissions for Fair Candy Swap.

var fairCandySwap = function(A, B) {
    for(let i = A.length - 1; i >= 0; i--){
        let sumExceptI = A.reduce((a,c) => a + c)
        sumExceptI = sumExceptI - A[i];
        
        let sumB = B.reduce((a,c) => a + c)
        
        for(let j = B.length - 1; j >= 0; j--){
            if(sumB - B[j] + A[i] === sumExceptI + B[j]){
                return [A[i], B[j]];
            }
        }
    }
};

