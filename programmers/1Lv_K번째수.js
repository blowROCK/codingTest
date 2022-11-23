// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  return commands.map((command) => {
    return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
      command[2] - 1
    ];
  });
}