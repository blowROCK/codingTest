// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + (signs[idx] ? cur : -cur),
    0
  );
}