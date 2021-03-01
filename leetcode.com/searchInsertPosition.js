/*
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

// Runtime: 72 ms, faster than 93.70% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39 MB, less than 21.63% of JavaScript online submissions for Search Insert Position.
var searchInsert = function(nums, target) {
    let currentPointer = Math.ceil((nums.length-1)/2);
    let minIndex = 0;
    let maxIndex = nums.length - 1;
    
    while(true){
        if(nums[currentPointer] === target){
            return currentPointer;
        }else if(nums[currentPointer] < target){
            if(currentPointer === maxIndex){
                return currentPointer+1;
            }
            minIndex = currentPointer+1
        }else if(nums[currentPointer] > target){
            if(currentPointer === minIndex){
                return currentPointer
            }
            maxIndex = currentPointer- 1
        }
        currentPointer = Math.ceil(minIndex + ((maxIndex-minIndex)/2))
    }
};

// Runtime: 80 ms, faster than 58.33% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 38.8 MB, less than 50.86% of JavaScript online submissions for Search Insert Position.
// var searchInsert = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] >= target){
//             return i;
//         }else if(i === nums.length - 1){
//             return nums.length
//         }
//     }
// };