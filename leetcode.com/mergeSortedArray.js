/**
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Runtime: 76 ms, faster than 86.10% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 38.7 MB, less than 37.69% of JavaScript online submissions for Merge Sorted Array.

var merge = function(nums1, m, nums2, n) {
    let totalLength = m + n - 1;
    while(n > 0){
        if(m == 0){
            nums1[totalLength] = nums2[n-1];
            totalLength--;
            n--;
        }else if(nums2[n-1] >= nums1[m-1]){
            nums1[totalLength] = nums2[n-1];
            totalLength--;
            n--;
        }else if(nums2[n-1] < nums1[m-1]){
            nums1[totalLength] = nums1[m-1];
            totalLength--;
            m--;
        }
    }
};