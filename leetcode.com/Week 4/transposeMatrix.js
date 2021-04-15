/**
867. Transpose Matrix

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// Runtime: 88 ms, faster than 86.28% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 40.7 MB, less than 83.54% of JavaScript online submissions for Transpose Matrix.

var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let transposeMatrix = Array.apply(null, Array(n)).map(function (x) { return Array(m); })
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            transposeMatrix[j][i] = matrix[i][j];
        }
    }
    return transposeMatrix;
};