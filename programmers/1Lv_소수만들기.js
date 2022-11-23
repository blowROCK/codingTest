// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrimeNum(nums[i] + nums[j] + nums[k]) ? answer++ : "";
      }
    }
  }
  return answer;
}
function isPrimeNum(number) {
  if (number < 2) return true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}