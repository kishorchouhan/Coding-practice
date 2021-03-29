/**
387. First Unique Character in a String

Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 96 ms, faster than 96.12% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 41.9 MB, less than 93.23% of JavaScript online submissions for First Unique Character in a String.

var firstUniqChar = function(s) {
    let newMap = new Map();
    for(let i = 0; i < s.length; i++){
        if(newMap.has(s[i])) continue;
        newMap.set(s[i], 0);
        for(let j = i+1; j < s.length; j++){
            if(s[j] === s[i]){
                newMap.set(s[i], newMap.get(s[i])+1)
                break;
            }
        }
        if(newMap.get(s[i]) === 0) return i;
    }
    return -1;
};