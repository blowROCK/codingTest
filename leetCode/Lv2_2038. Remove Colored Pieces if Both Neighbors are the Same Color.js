// https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let Acount = 0;
  let Bcount = 0;

  for (let i = 2; i < colors.length; i++) {
    if (colors[i - 2] === 'A' && colors[i - 1] === 'A' && colors[i] === 'A') {
      Acount++;
    } else if (
      colors[i - 2] === 'B' &&
      colors[i - 1] === 'B' &&
      colors[i] === 'B'
    ) {
      Bcount++;
    }
  }

  return Acount > Bcount;
};

// const remove = (turn, colors) => {
//   const index = colors.indexOf(turn === 'A' ? 'AAA' : 'BBB')
//   if(index === -1) return turn === 'A' ? false : true
//   return remove(turn === 'A' ? 'B' : 'A', colors.substring(0,index)+colors.substring(index+1, colors.length))
// }
// return remove('A', colors)

// AAABBBABABB 3개중에 1개가 없어진다고 달라지지 않는다.
