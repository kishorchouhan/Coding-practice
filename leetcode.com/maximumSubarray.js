/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 84 ms, faster than 76.91% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 39.2 MB, less than 65.96% of JavaScript online submissions for Maximum Subarray.

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for(let i = 1; i < nums.length; i++){
      if(nums[i] >= currentSum + nums[i]){
        currentSum = nums[i]
      }else{
        currentSum = currentSum + nums[i]
      }
      if(maxSum < currentSum) maxSum = currentSum;
      
    }
    
    return maxSum
};

// Failed Try:
// var maxSubArray = function(nums) {
//     var findMaxOfTwo = (a,b) => a > b ? a : b;
  
//     var findMaxOfThree = (a,b,c) => findMaxOfTwo(findMaxOfTwo(a,b), c)
  
//     var findMaxIncludingMid = (left, right, mid) => {
//       let sumLeft = Number.MIN_SAFE_INTEGER;
//       let sum = 0;
//       for(let i = mid; mid >= left; i--){
//         sum = sum + nums[i];
//         if(sum > sumLeft){
//           sumLeft = sum;
//         }
//       }
      
//       let sumRight = Number.MIN_SAFE_INTEGER;
//       sum = 0;
//       for(let j = mid+1; j <= right; j++){
//         sum = sum + nums[j];
//         if(sum > sumRight){
//           sumRight = sum;
//         }
//       }
//       return findMaxOfThree(sumLeft+sumRight, sumLeft, sumRight) //[-2,1]
//     }
    
//     var findMaxSum = (left, right) => {
//       if(left === right) return nums[left];
//       let mid = Math.floor((left + right) / 2);
      
//       return findMaxOfThree(findMaxSum(left, mid), findMaxSum(mid+1, right), findMaxIncludingMid(left, right, mid))
//     }
    
//     return findMaxSum(0, nums.length-1)
//   };
