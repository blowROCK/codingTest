// https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arr = []
  let isUp = true
  for(let i = 0, numRow = 0; i < s.length; i ++) {
    if(!arr[numRow]) arr[numRow] = []
    arr[numRow].push(s[i])
    
    numRow = isUp ? numRow + 1 : numRow - 1;
    if(numRow === numRows-1 || numRow === 0) isUp = !isUp
  }
  
  return arr.flat().join('')
};
  
