/**
228. Summary Ranges

You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
Example 3:

Input: nums = []
Output: []
Example 4:

Input: nums = [-1]
Output: ["-1"]
Example 5:

Input: nums = [0]
Output: ["0"]
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.
*/


/**
 * @param {number[]} nums
 * @return {string[]}
 */

// Brute force-1st solution
// Runtime: 80 ms, faster than 45.32% of JavaScript online submissions for Summary Ranges.
// Memory Usage: 38.4 MB, less than 78.23% of JavaScript online submissions for Summary Ranges.

var summaryRanges = function(nums) {
    if(nums.length === 0) return [];
    
    let res = [];
    let minRange = undefined;
    
    for(let i = 0; i < nums.length; i++){
        if(i == 0){
            minRange = nums[i];
        }else if(nums[i-1]+1 !== nums[i]){
            res.push(minRange === nums[i-1] ? `${minRange}` : `${minRange}->${nums[i-1]}`);
            minRange = nums[i];
        }
        if(i === nums.length-1){
            res.push(minRange === nums[i] ? `${minRange}` : `${minRange}->${nums[i]}`);
        }
    }
    return res;
};