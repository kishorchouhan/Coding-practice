/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [1, 4, 6, 8, 11, 13, 15] might become [8, 11, 13, 15, 1, 4, 6]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/*
Example 1:

Input: nums = [8, 11, 13, 15, 1, 4, 6], target = 1
Output: 4
Example 2:

Input: nums = [1, 4, 6, 8, 11, 13, 15], target = 3
Output: -1
*/

function findPivot(arr, start = 0, end = arr.length - 1) {
  if (arr[0] < arr[arr.length - 1]) return 0;
  if (start == end) return start;

  var mid = parseInt((start + end) / 2);

  if (arr[0] > arr[mid]) {
    return findPivot(arr, start, mid);
  } else {
    return findPivot(arr, mid + 1, end);
  }
}

var pivot = findPivot([7, 8, 11, 13, 15, 1, 4, 6]);
console.log(pivot);
