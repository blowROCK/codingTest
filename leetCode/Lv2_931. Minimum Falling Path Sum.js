// https://leetcode.com/problems/minimum-falling-path-sum/description/


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const check = (n) =>  n !== undefined ? n : Infinity;
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      matrix[row][col] = matrix[row][col] + Math.min(check(matrix[row-1][col-1]), check(matrix[row-1][col]), check(matrix[row-1][col+1]));
    }
  }
  console.log(matrix)
  return Math.min(...matrix[matrix.length-1]);
};