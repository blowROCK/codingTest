// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]));
  let prev = days[0];
  let count = 1;
  for (let i = 1; i < days.length + 1; i++) {
    if (prev < days[i] || i === days.length) {
      answer.push(count);
      prev = days[i];
      count = 1;
    } else {
      count++;
    }
  }
  return answer;
}