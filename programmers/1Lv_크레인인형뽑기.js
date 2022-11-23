// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const boards = board;
  const answer = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let row = 0; row < boards.length; row++) {
      const col = moves[i] - 1;
      if (boards[row][col] > 0) {
        if (answer[answer.length - 1] === boards[row][col]) {
          answer.pop();
          count += 2;
        } else {
          answer.push(boards[row][col]);
        }
        boards[row][col] = 0;
        break;
      }
    }
  }
  return count;
}