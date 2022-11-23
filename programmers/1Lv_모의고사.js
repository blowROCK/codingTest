// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  return answers
    .map((answer, idx) => {
      return [
        supo1[idx % supo1.length] === answer ? 1 : "",
        supo2[idx % supo2.length] === answer ? 2 : "",
        supo3[idx % supo3.length] === answer ? 3 : "",
      ];
    })
    .flat(Infinity)
    .filter((el) => el)
    .reduce(
      (acc, cur) => {
        acc[cur - 1]++;
        return acc;
      },
      [0, 0, 0]
    )
    .reduce((acc, cur, idx, arr) => {
      let max = Math.max(...arr);
      cur === max ? acc.push(idx + 1) : "";
      return acc;
    }, []);
}