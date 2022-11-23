// https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  const pick = nums.length / 2;
  const numbers = nums.filter((num, idx) => nums.indexOf(num) === idx).length;
  return numbers < pick ? numbers : pick;
}