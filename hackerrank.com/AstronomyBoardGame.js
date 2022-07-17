
/*
hackerrank.com
Astronomy Board Game

Sample Test Case 1 (assuming a zero index):
planer[] = [2,5,3,1]
output: 1
Explanation: N=4 and planets = [2,5,3,1]. Here, if we destory the 
second planet of mass 5, then planets = [2,3,1] and the sum of even
positioned planets is (2+1) = 3 and the sum of odd positioned planets
is (3)=3, i.e., both are equal now. Hence we destroy the planet at 
index 1.
Same Test Case 2 (assuming a zero index)
planets[]=[3,5,6,7,9,4]
output:2
Explanation: N=6 and planets = [3,5,6,7,9,4]. Here if we destroy the third
planet of mass 6 then planets = [3,5,7,9,4] and the sum of even positioned
planets is (3+7+4)=14, and the sum of odd positioned planets is (5+9)=14.
Both are equal now. Hence, we destroy the planet at index 2. Deleting the 
fourth planet with mass 9 will stabilize the planetary system, but we will 
destroy the planet with minimum index.
*/
// Optimized solution
function getPlanetToDestroy(planets) {
    let oldEven = 0
    let oldOdd = 0
    for (let i = 0; i < planets.length; i++) {
        let temp = planets.slice(0, i).concat(planets.slice(i + 1))
        let even = oldEven;
        let odd = oldOdd;
        for (let j = i; j < temp.length; j++) {
            if (j % 2 === 0) {
                even += temp[j];
            } else {
                odd += temp[j];
            }
        }
        if (even === odd) return i;
        if (i % 2 === 0) {
            oldEven += planets[i]
        } else {
            oldOdd += planets[i]
        }
    }
    return -1;
}

console.log(getPlanetToDestroy([2, 5, 3, 1]))

// Brute force solution
function getPlanetToDestroy2(planets) {
    for (let i = 0; i < planets.length; i++) {
        let temp = planets.slice(0, i).concat(planets.slice(i + 1))
        let even = 0;
        let odd = 0;
        for (let j = 0; j < temp.length; j++) {
            if (j % 2 === 0) {
                even += temp[j];
            } else {
                odd += temp[j];
            }
        }
        if (even === odd) return i
    }
    return -1;
}

console.log(getPlanetToDestroy2([2, 5, 3, 1]))