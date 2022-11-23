// https://leetcode.com/problems/maximum-matrix-sum/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  let min = Infinity;
  let sum = 0;
  let ninus = 0;
  for(let i = 0; i < matrix.length ; i ++){
    for(let j = 0; j < matrix.length; j++) {
      sum += Math.abs(matrix[i][j]);
      min = Math.min(min, Math.abs(matrix[i][j]));
      if(matrix[i][j] < 0) ninus++;
    }
  }
  if(ninus % 2 === 1) sum -= (min * 2)
  return sum;
};