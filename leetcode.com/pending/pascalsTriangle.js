/**
118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Runtime: 68 ms, faster than 97.35% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 38.3 MB, less than 87.34% of JavaScript online submissions for Pascal's Triangle.

var generate = function(numRows) {
    let result = new Array(numRows);
    for(let i = 1; i <= numRows; i++){
        let iThRowArray = new Array(i);
        for(let j = 0; j < i; j++){
            if(j === 0 || j === iThRowArray.length-1){
                iThRowArray[j] = 1;
            }else{
                iThRowArray[j] = result[i-2][j-1] + result[i-2][j];
            }
        }
        result[i-1] = iThRowArray;
    }
    return result
};
