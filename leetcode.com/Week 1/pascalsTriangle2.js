/**
118. Pascal's Triangle 2

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

/**
 * @param {number} numRows
 * @return {number[][]}
*/

// Solution 1:
// Runtime: 80 ms, faster than 53.02% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 38.5 MB, less than 75.35% of JavaScript online submissions for Pascal's Triangle II.
var getRow = function(rowIndex) {
    let iThRowArray = new Array(rowIndex+1);
    
    for(let i = 0; i <= Math.floor(rowIndex/2); i++){
        if(i === 0){
            iThRowArray[i] = 1
            iThRowArray[rowIndex] = 1
        }else{
            iThRowArray[i] = (iThRowArray[i-1] * (rowIndex-(i-1)))/i;
            iThRowArray[rowIndex-i] = iThRowArray[i];
        }
    }
    return iThRowArray
};



// Solution 2:
// Runtime: 80 ms, faster than 53.02% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 38.6 MB, less than 61.40% of JavaScript online submissions for Pascal's Triangle II.

// var getRow = function(rowIndex) {
//     let result = new Array(rowIndex+1);
//     for(let i = 1; i <= rowIndex+1; i++){
//         let iThRowArray = new Array(i);
//         for(let j = 0; j < Math.ceil(i/2); j++){
//             if(j === 0){
//                 iThRowArray[j] = 1;
//                 iThRowArray[i-1] = 1;
//             }else{
//                 iThRowArray[j] = result[i-2][j-1] + result[i-2][j];
//                 iThRowArray[i-j-1] = result[i-2][j-1] + result[i-2][j];
//             }
//         }
//         result[i-1] = iThRowArray;
//     }
//     return result[rowIndex]
// };
