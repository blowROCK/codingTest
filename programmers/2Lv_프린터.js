// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let target_index = location; //user가 선택한 index
  let answer = 1;
  let first = -1;
  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some((value, index) => value > first)) {
      priorities.push(first);
    } else {
      if (target_index === 0) {
        break;
      } else answer++;
    }
    if (target_index === 0) target_index = priorities.length - 1;
    else target_index--;
  }
  return answer;
}