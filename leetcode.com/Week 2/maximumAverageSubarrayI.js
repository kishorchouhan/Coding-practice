/**
643. Maximum Average Subarray I

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Runtime: 96 ms, faster than 91.52% of JavaScript online submissions for Maximum Average Subarray I.
// Memory Usage: 47.3 MB, less than 90.94% of JavaScript online submissions for Maximum Average Subarray I.

var findMaxAverage = function(nums, k) {
    var maxSoFar = 0;
    for(let i = 0; i < k; i++){
        maxSoFar += nums[i];
    }
    let maxLastK = maxSoFar;
    
    for(let j = k; j < nums.length; j++){
        if(maxSoFar < (maxLastK - nums[j-k] + nums[j])){
            maxSoFar = maxLastK - nums[j-k] + nums[j];
        }
        maxLastK = maxLastK - nums[j-k] + nums[j]
    }

    return maxSoFar / k
};