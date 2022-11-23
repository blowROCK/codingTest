// https://leetcode.com/problems/online-stock-span/

var StockSpanner = function (prices) {
  this.stocks = [];
};
StockSpanner.prototype.next = function (price) {
  this.stocks.unshift(price);
  let count = 0;
  for (let i = 0; i < this.stocks.length; i++) {
    if (this.stocks[i] <= price) {
      count++;
    } else {
      break;
    }
  }
  return count;
};