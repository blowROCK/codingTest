// https://leetcode.com/problems/convert-the-temperature/description/

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [273.15 + celsius,1.8 * celsius + 32] 
};