/**
661. Image Smoother

Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150].
*/

// Sol#1
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
// Runtime: 152 ms, faster than 31.71% of JavaScript online submissions for Image Smoother.
// Memory Usage: 47.1 MB, less than 17.07% of JavaScript online submissions for Image Smoother.
var imageSmoother = function(M) {
    let m = M.length;
    let n = M[0].length;
    let img = Array.apply(null, Array(m)).map(function (x) { return Array(n); })
    for(let k = 0; k < m; k++){
        for(let l = 0; l < n; l++){
            let sum = 0;
            let count = 0;
            let i = k, j = l;
            
            --j;
            if(--i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            ++j;
            if(i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            ++j;
            if(i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            
            if(++i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            --j;
            if(i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            --j;
            if(i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            
            if(++i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            ++j;
            if(i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }
            ++j;
            if(i >= 0 && i < m && j >= 0 && j < n){
                sum += M[i][j];
                count++;
            }

            img[--i][--j] = Math.floor(sum/count);
        }
    }
    return img;
};