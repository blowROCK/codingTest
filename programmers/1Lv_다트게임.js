// https://school.programmers.co.kr/learn/courses/30/lessons/17682

const splitStr = function (str) {
  let strArr = str.split(/([0-9]{1,2}[S|D|T][#,*]?)/gi).filter((s) => s !== "");
  return strArr.map((str) => {
    return str.split(/([0-9]{1,2}|[S|D|T]|[#,*]?)/).filter((s) => s !== "");
  });
};

const BONUSES = { S: 1, D: 2, T: 3 };
const OPTIONS = { "*": 2, "#": -1, Null: 1 };

function solution(dartResult) {
  if (!dartResult) return;
  let answer = [];

  splitStr(dartResult).forEach((inputVal, i) => {
    const score = Number(inputVal[0]);
    const bonus = inputVal[1];
    const option = inputVal[2] || "Null";

    if (option === "*") answer[i - 1] = answer[i - 1] * OPTIONS[option];

    answer.push(score ** BONUSES[bonus] * OPTIONS[option]);
  });
  return answer.reduce((a, b) => a + b, 0);
}