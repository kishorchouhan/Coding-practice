/**
896. Monotonic Array

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

 

Example 1:

Input: [1,2,2,3]
Output: true
Example 2:

Input: [6,5,4,4]
Output: true
Example 3:

Input: [1,3,2]
Output: false
Example 4:

Input: [1,2,4,5]
Output: true
Example 5:

Input: [1,1,1]
Output: true
 

Note:

1 <= A.length <= 50000
-100000 <= A[i] <= 100000
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */

// Runtime: 92 ms, faster than 78.88% of JavaScript online submissions for Monotonic Array.
// Memory Usage: 44.7 MB, less than 94.91% of JavaScript online submissions for Monotonic Array.
var isMonotonic = function(A) {
    let monotoneType
    for(let i = 0; i < A.length; i++){
        if(A[i] < A[i+1]){
            if(monotoneType === undefined){
                monotoneType = "increasing";
            }else if(monotoneType === "decreasing"){
                return false;
            }
        }else if(A[i] > A[i+1]){
            if(monotoneType === undefined){
                monotoneType = "decreasing";
            }else if(monotoneType === "increasing"){
                return false;
            }
        }
    }
    return true;
};