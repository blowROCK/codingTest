// https://leetcode.com/problems/longest-common-subsequence/description/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  // let [big, small] = text1.length > text2.length ? [text1, text2] : [text2, text1];
  // const temp = [];
  // for(let i = 0; i < small.length; i++) {
  //   for(let j = 0; j < big.length; j++) {
  //     if(small[i] === big[j]) {
  //       console.log(big, j)
  //       temp.push(big[j])
  //       big = big.slice(j+1)
  //       break;
  //     }
  //   }
  // }
  // console.log(temp)
  // return temp.length;
  // 대 실패
  let matrix = Array(text1.length + 1).fill(0).map(x => Array(text2.length + 1).fill(0))
  for(let i = 1; i < matrix.length; i++){
    for(let j = 1; j < matrix[0].length; j++){
      if(text1[i-1] === text2[j-1]){
        matrix[i][j] = matrix[i-1][j-1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
      }
    }
  }
  return matrix[text1.length][text2.length];
};