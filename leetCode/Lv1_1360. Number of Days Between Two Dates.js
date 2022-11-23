// https://leetcode.com/problems/number-of-days-between-two-dates/

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  const time = new Date(date2) - new Date(date1);
  return Math.abs(time / 1000 / 60 / 60 / 24)
};