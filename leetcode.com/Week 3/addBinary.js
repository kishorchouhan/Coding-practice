/**
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 var addBinary = function(a, b) {
    let op = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while(i >= 0 || j >= 0){
        let s = carry;
        if(j >= 0) s += Number(b[j--]);
        if(i >= 0) s += Number(a[i--]);
        op = s%2 + op;
        carry = Math.floor(s/2);
    }
    if(carry !== 0) op = carry + op;
    return op
};

// Runtime: 80 ms, faster than 93.16% of JavaScript online submissions for Add Binary.
// Memory Usage: 42.1 MB, less than 7.95% of JavaScript online submissions for Add Binary.

var addBinary = function (a, b) {
    let op = "";
    let carry = "";
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 && j >= 0) {
        if (a[i] === b[j]) {
            if (a[i] === "1") {
                if (carry === "1") {
                    op = "1" + op;
                } else {
                    carry = "1";
                    op = "0" + op;
                }
            } else if (a[i] === "0") {
                if (carry === "1") {
                    carry = ""
                    op = "1" + op;
                } else {
                    op = "0" + op;
                }
            }
        } else {
            if (carry === "1") {
                op = "0" + op;
            } else {
                op = "1" + op;
            }
        }
        i--;
        j--;
    }

    if (i >= 0) {
        while (i >= 0) {
            if (carry === "1") {
                if (a[i] === "1") {
                    op = "0" + op;
                } else {
                    carry = "";
                    op = "1" + op;
                }
            } else {
                op = a[i] + op;
            }
            i--;
        }
    } else if (j >= 0) {
        while (j >= 0) {
            if (carry === "1") {
                if (b[j] === "1") {
                    op = "0" + op;
                } else {
                    carry = "";
                    op = "1" + op;
                }
            } else {
                op = b[j] + op;
            }
            j--;
        }
    }

    if (carry === "1") {
        op = "1" + op;
    }
    return op;
};
