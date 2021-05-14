/**
830. Positions of Large Groups

In a string s of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

A group is considered large if it has 3 or more characters.

Return the intervals of every large group sorted in increasing order by start index.

 

Example 1:

Input: s = "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the only large group with start index 3 and end index 6.
Example 2:

Input: s = "abc"
Output: []
Explanation: We have groups "a", "b", and "c", none of which are large groups.
Example 3:

Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are "ddd", "eeee", and "bbb".
Example 4:

Input: s = "aba"
Output: []
 

Constraints:

1 <= s.length <= 1000
s contains lower-case English letters only.

*/

/**
 * @param {string} s
 * @return {number[][]}
 */

// Runtime: 96 ms, faster than 62.41% of JavaScript online submissions for Positions of Large Groups.
// Memory Usage: 42 MB, less than 58.16% of JavaScript online submissions for Positions of Large Groups.

var largeGroupPositions = function(s) {
    let lastChar = s[0], startI = 0, endI = 0;
    let resArr = [];
    for(let i = 1; i < s.length; i++){
        if(s[i] === lastChar){
            endI = i;
        }else{
            if(endI - startI >= 2){
                resArr.push([startI, endI]);
            }
            startI = i;
            endI = i;
            lastChar = s[i];
        }
    }
    if((endI - startI) >= 2){
        resArr.push([startI, endI]);
    }
    return resArr;
};

// Sol#2
/**
 * @param {string} s
 * @return {number[][]}
 */
// Runtime: 92 ms, faster than 81.54% of JavaScript online submissions for Positions of Large Groups.
// Memory Usage: 41.8 MB, less than 73.08% of JavaScript online submissions for Positions of Large Groups.
var largeGroupPositions = function(s) {
    let resArr = [];
    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(i === s.length-1 || s[i] !== s[i+1]){
            if(i-j+1 >= 3){
                resArr.push([j,i]);
            }
            j = i + 1;
        }
    }
    return resArr;
};