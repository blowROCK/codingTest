// https://leetcode.com/problems/sort-characters-by-frequency/description/


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  // s = tree
  const map = {}
  for(const str of s) {
    map[str] = (map[str] || 0) + 1;
  }
  // map: { t: 1, r: 1, e: 2 }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1]) // [e, r, t]
    .map(s => s[0].repeat(s[1])) // [e, e, r, t]
    .join(''); // 'eert'
};