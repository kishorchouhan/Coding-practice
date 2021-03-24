/**
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Runtime: 92 ms, faster than 99.94% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 46.3 MB, less than 92.87% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

var findDisappearedNumbers = function(nums) {
    let missNo = [];
    for(let i = 0; i < nums.length; i++){
        let val = Math.abs(nums[i]) - 1;
        if(nums[val] > 0){
            nums[val] = -nums[val]; 
        }
    }
    for(let j = 0; j < nums.length; j++){
        if(nums[j] > 0){
            missNo.push(j+1);
        }
    }
    return missNo;
};