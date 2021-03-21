// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Examples : 

// Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
// Output : 4
// Explanation: The frequency of 4 is 5 which is greater
// than the half of the size of the array size. 

// Input : {3, 3, 4, 2, 4, 4, 2, 4}
// Output : No Majority Element
// Explanation: There is no element whose frequency is
// greater than the half of the size of the array size.

/**
 * @param {number[]} nums
 * @return {number}
 */

// By Moore’s Voting Algorithm
//  Runtime: 92 ms, faster than 38.44% of JavaScript online submissions for Majority Element.
//  Memory Usage: 41 MB, less than 71.75% of JavaScript online submissions for Majority Element.

 var majorityElement = function(nums) {
    let count = 1;
    let majorEle = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(count==0){
            count++;
            majorEle=nums[i];
        }else if(majorEle==nums[i]){
            count++;
        }else count--;        
    }
    return majorEle
};

// Runtime: 88 ms, faster than 57.06% of JavaScript online submissions for Majority Element.
// Memory Usage: 41.2 MB, less than 45.68% of JavaScript online submissions for Majority Element.

// var majorityElement = function(nums) {
//     let obj = {};
//     for(let i = 0; i < nums.length; i++){
//         if(obj[nums[i]] === undefined){
//             obj[nums[i]] = 1;
//         }else{
//             obj[nums[i]] = obj[nums[i]] + 1;
//         }
//         if(obj[nums[i]] >= nums.length/2) return nums[i]
//     }
// };