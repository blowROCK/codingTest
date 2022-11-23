// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = "";
  while (n > 0) {
    let rest = n % 3;
    n = Math.floor(n / 3);
    if (rest === 0) {
      n -= 1;
      rest = 4;
    }
    answer = rest + answer;
  }
  return answer;
}