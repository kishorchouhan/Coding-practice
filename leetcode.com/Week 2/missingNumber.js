/**
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Sol1
// Runtime: 84 ms, faster than 83.31% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.2 MB, less than 39.55% of JavaScript online submissions for Missing Number.
var missingNumber = function(nums) {
    let totalSum = 0;
    let numSum = 0;
    for(let i = 0; i < nums.length; i++){
        totalSum += i;
        numSum += nums[i];
    }
    return totalSum + nums.length - numSum
};

// Sol2
// Runtime: 80 ms, faster than 93.09% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.2 MB, less than 39.55% of JavaScript online submissions for Missing Number.

var missingNumber = function(nums) {
    let missingNo = 0;
    for(let i = 0; i < nums.length; i++){
        missingNo += i - nums[i];
    }
    return missingNo + nums.length
};

// Sol3: XOR

// Runtime: 80 ms, faster than 93.09% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.5 MB, less than 21.88% of JavaScript online submissions for Missing Number.

var missingNumber = function(nums) {
    let missingNo = nums.length;
    for(let i = 0; i < nums.length; i++){
        missingNo = missingNo ^ i ^ nums[i];
    }
    return missingNo
};