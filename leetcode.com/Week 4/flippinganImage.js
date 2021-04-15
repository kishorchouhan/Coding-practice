/**
832. Flipping an Image

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

Constraints:

n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.

*/

// Sol 1:
// Runtime: 92 ms, faster than 21.98% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 40.3 MB, less than 62.59% of JavaScript online submissions for Flipping an Image.

let reverseArr = (arr) => {
    let lenArr = arr.length;
    for(let i = 0; i < Math.floor(lenArr/2); i++){
        let val = arr[i] === 0 ? 1 : 0;
        arr[i] = arr[lenArr-i-1] === 0 ? 1 : 0;
        arr[lenArr-i-1] = val;
    }
    if(lenArr % 2 !== 0){
        arr[Math.floor(lenArr/2)] = arr[Math.floor(lenArr/2)] === 0 ? 1 : 0;
    }
    return arr;
}


var flipAndInvertImage = function(image) {
    for(let j = 0; j < image.length; j++){
        image[j] = reverseArr(image[j]);
    }
    return image;
};


// Sol 2:
/**
 * @param {number[][]} image
 * @return {number[][]}
 */

// Runtime: 84 ms, faster than 77.41% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 40.5 MB, less than 39.38% of JavaScript online submissions for Flipping an Image.

let reverseArr = (arr) => {
    let lenArr = arr.length;
    for(let i = 0; i < Math.floor(lenArr/2); i++){
        let val = arr[i];
        arr[i] = arr[lenArr-i-1];
        arr[lenArr-i-1] = val;
    }
    return arr;
}

let invertArr = (arr) => {
    for(let k = 0; k < arr.length; k++){
        arr[k] = arr[k] === 0 ? 1 : 0;
    }
    return arr;
}

var flipAndInvertImage = function(image) {
    for(let j = 0; j < image.length; j++){
        image[j] = invertArr(reverseArr(image[j]));
    }
    return image;
};