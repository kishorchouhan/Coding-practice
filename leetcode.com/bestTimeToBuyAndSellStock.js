// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */

// Runtime: 104 ms, faster than 50.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 49.1 MB, less than 10.67% of JavaScript online submissions for Best Time to Buy and Sell Stock.

var maxProfit = function(prices) {
    let profit = 0;
    let buyDay = 0;
    let sellDay = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] > prices[buyDay] && profit < (prices[i] - prices[buyDay])){
            profit = prices[i] - prices[buyDay];
        }else if(prices[i] < prices[buyDay]){
            buyDay = i
        }
    }
    return profit;
};

// Solution 1st
//Time Limit Exceeded
// var maxProfit = function(prices) {
//     let profit = 0;
//     let buyDay = 0;
//     let sellDay = 0;
//     for(let i = 0; i < prices.length; i++){
//         buyDay = i;
//         for(let j = i+1; j < prices.length; j++){
//             if(prices[buyDay] < prices[j] && profit < (prices[j] - prices[buyDay])){
//                 profit = prices[j] - prices[buyDay];
//                 sellDay = j;
//             }
//         }
//     }
//     return profit;
// };