// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const isUnique = (nums) => {
    const newNums = nums.filter(n => n !== '.')
    const unique = new Set(newNums);
    return newNums.length === unique.size;
  }
  const nine = Array.from({length: 9}, e => Array());
  for(let row = 0; row < board.length; row++) {
    if(!isUnique(board[row])) return false;
    const cols = [];
    for(let col = 0; col < board[0].length; col++) {
      const idx = Math.floor(col / 3) + Math.floor(row / 3) * 3;
      cols.push(board[col][row])
      nine[idx].push(board[col][row])
      if(nine[idx].length === board.length && !isUnique(nine[idx])) return false;
    }
    if(!isUnique(cols)) return false;
  }  
  return true;
};