/**
283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Sol1
// Runtime: 92 ms, faster than 38.43% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.3 MB, less than 75.12% of JavaScript online submissions for Move Zeroes.

var moveZeroes = function(nums) {
    let n = nums.length;
    let i = 0;
    while(i < n){
        if(nums[i] === 0){
            for(let j = i+1; j < n; j++){
                if(nums[j] !== 0){
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
        }
        i++;
    }
    return nums
};
// Sol2(Improved)
// Runtime: 84 ms, faster than 82.55% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.5 MB, less than 27.56% of JavaScript online submissions for Move Zeroes.

var moveZeroes = function(nums) {
    let consecutiveZero = 0;
    for (let i=0; i < nums.length; i++){
        if(nums[i] === 0){
            consecutiveZero++;
        }else if(consecutiveZero > 0){
            let currentNo = nums[i];
            nums[i] = 0;
            nums[i-consecutiveZero] = currentNo;
        }
    }
};
