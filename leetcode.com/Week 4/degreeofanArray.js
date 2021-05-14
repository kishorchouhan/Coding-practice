/**
697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 96 ms, faster than 74.43% of JavaScript online submissions for Degree of an Array.
// Memory Usage: 41.9 MB, less than 92.75% of JavaScript online submissions for Degree of an Array.
var findShortestSubArray = function(nums) {
    let left = {};
    let right = {};
    let count = {};
    
    for(let i = 0; i < nums.length; i++){
        let x = nums[i];
        if(left[x] === undefined) left[x] = i;
        right[x] = i;
        count[x] =  (count[x] === undefined ? 0 : count[x]) + 1;
    }
    
    let result = nums.length;
    let degree = Math.max(...Object.values(count));
    
    for (const x in count){
        if(count[x] === degree){
            result = Math.min(result, right[x] - left[x] + 1)
        }
    }
    return result;
};