/**
219. Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/

// Solution 2:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Runtime: 96 ms, faster than 53.60% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 45.6 MB, less than 33.28% of JavaScript online submissions for Contains Duplicate II.

var containsNearbyDuplicate = function(nums, k) {
    let store = {}
    for(let i = 0; i < nums.length; i++){
        if(store[nums[i]] !== undefined && nums[store[nums[i]]] == nums[i] && Math.abs(store[nums[i]] - i) <= k){
            return true
        }else{
            store[nums[i]] = i
        }
    }
    return false;
};

// Brute force
// Runtime: 836 ms, faster than 21.76% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 40.6 MB, less than 78.96% of JavaScript online submissions for Contains Duplicate II.
// var containsNearbyDuplicate = function(nums, k) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] === nums[j] && Math.abs(i-j) <= k){
//                 return true;
//             }
//         }
//     }
//     return false;
// };