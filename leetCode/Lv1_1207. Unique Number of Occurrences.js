// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = {}
  for(const a of arr){
    map[a] = (map[a] || 0) + 1;
  }
  const sort = Object.values(map)
  return new Set(sort).size === sort.length
};
