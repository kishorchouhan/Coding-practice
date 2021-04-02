/**
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// Runtime: 92 ms, faster than 40.17% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 40.2 MB, less than 30.37% of JavaScript online submissions for Longest Common Prefix.

var longestCommonPrefix = function(strs) {
    let commonPreFix = "";
    if(strs.length === 0) return ""

    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return commonPreFix;
            }
        }
        commonPreFix += strs[0][i];
    }
    return commonPreFix;
};