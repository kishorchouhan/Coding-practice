/**
766. Toeplitz Matrix

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

 

Example 1:


Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:


Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 20
0 <= matrix[i][j] <= 99
 

Follow up:

What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
What if the matrix is so large that you can only load up a partial row into the memory at once?

*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

// Sol1
// Runtime: 88 ms, faster than 80.20% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 40.6 MB, less than 51.01% of JavaScript online submissions for Toeplitz Matrix.

var isToeplitzMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let i = m - 1;
    let j = 0;
    while(j < n){
        let no = matrix[i][j];
        for(let a = i,b = j; a < m && b < n; a++, b++){
            if(no !== matrix[a][b]){
                return false;
            }
        }
        
        if(i === 0){
            j++;
        }else{
            i--;
        }
    }
    return true;
};

// Sol2: better
// Runtime: 84 ms, faster than 90.94% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 40.2 MB, less than 81.54% of JavaScript online submissions for Toeplitz Matrix.

var isToeplitzMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i > 0 && j > 0 && matrix[i-1][j-1] !== matrix[i][j]){
                return false
            }
        }
    }
    return true;
};