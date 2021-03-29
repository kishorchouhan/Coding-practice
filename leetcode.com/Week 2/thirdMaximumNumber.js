/**
414. Third Maximum Number

Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Can you find an O(n) solution?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 84 ms, faster than 60.69% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 38.9 MB, less than 85.92% of JavaScript online submissions for Third Maximum Number.

var thirdMax = function(nums) {
    let first = Number.MIN_SAFE_INTEGER;
    let sec = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === first || nums[i] === sec || nums[i] === third){
            continue;
        }else if(nums[i] > first){
            third = sec;
            sec = first;
            first = nums[i];
        }else if(nums[i] > sec){
            third = sec;
            sec = nums[i];
        }else if(nums[i] > third){
            third = nums[i];
        }
    }
    
    if(third === Number.MIN_SAFE_INTEGER){
        return first;
    }else{
        return third;
    }
    
};