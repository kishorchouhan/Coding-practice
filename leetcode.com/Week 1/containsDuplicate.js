// 217. Contains Duplicate
/**
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 2
// Runtime: 100 ms, faster than 39.50% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.6 MB, less than 6.55% of JavaScript online submissions for Contains Duplicate.

var containsDuplicate = function(nums) {
    let store = {};
    
    for(let i = 0; i < nums.length; i++){
        if(store[nums[i]] !== undefined){
            return true;
        }else{
            store[nums[i]] = i
        }
    }
    return false;
};

// Brute force solution 1
// Runtime: 896 ms, faster than 14.57% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 40.6 MB, less than 98.13% of JavaScript online submissions for Contains Duplicate.

// var containsDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// };