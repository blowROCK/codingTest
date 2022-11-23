// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  return numbers
    .map((el, i) => {
      return numbers.map((el2, j) => (i < j ? el + el2 : undefined));
    })
    .flat()
    .sort((a, b) => a - b)
    .filter((n, i, arr) => n != arr[i - 1] && n !== undefined);
}