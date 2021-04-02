/**
383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

You may assume that both strings contain only lowercase letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// Runtime: 100 ms, faster than 76.41% of JavaScript online submissions for Ransom Note.
// Memory Usage: 45.4 MB, less than 17.54% of JavaScript online submissions for Ransom Note.

var canConstruct = function(ransomNote, magazine) {
    for(let i = 0; i < ransomNote.length; i++){
        let found = false;
        for(let j = 0; j < magazine.length; j++){
            if(ransomNote[i] === magazine[j]){
                magazine = magazine.slice(0,j) + magazine.slice(j+1);
                found = true;
                break;
            }
        }
        if(!found) return false; 
    }
    return true;
};