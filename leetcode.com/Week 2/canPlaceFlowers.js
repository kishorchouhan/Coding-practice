/**
605. Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// Runtime: 88 ms, faster than 63.68% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 40.8 MB, less than 15.59% of JavaScript online submissions for Can Place Flowers.

var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true;
    let last = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0 && (flowerbed[i+1] === 0 ||  i === flowerbed.length-1) && last === 0){
            n--;
            last = 1;
        }else{
            last = flowerbed[i];
        }
        
        if(n === 0) return true
    }
    return false
}