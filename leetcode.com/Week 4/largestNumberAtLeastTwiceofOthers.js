/**
747. Largest Number At Least Twice of Others

In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 

Example 2:

Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 

Note:

nums will have a length in the range [1, 50].
Every nums[i] will be an integer in the range [0, 99].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 84 ms, faster than 48.90% of JavaScript online submissions for Largest Number At Least Twice of Others.
// Memory Usage: 38.8 MB, less than 80.94% of JavaScript online submissions for Largest Number At Least Twice of Others.

var dominantIndex = function(nums) {
    let max = nums[0], maxI = 0;
    let double = 0;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > max){
            double = max*2;
            maxI = i;
            max = nums[i];
        }else if(nums[i]*2 > double){
            double = nums[i]*2;
        }
    }
    if(max >= double) return maxI;
    else return -1;
};