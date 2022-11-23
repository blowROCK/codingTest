// https://school.programmers.co.kr/learn/courses/30/lessons/67256

const pad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];
class Pad {
  constructor(numbers, hand) {
    this.numbers = numbers;
    this.hand = hand;
    this.cur = {
      left: [3, 0],
      right: [3, 2],
    };
  }
  savePosition(hand, position) {
    this.cur[hand] = position;
    return hand === "left" ? "L" : "R";
  }
  closedHand(position) {
    let point_L = 0;
    let point_R = 0;
    for (let i = 0; i < position.length; i++) {
      point_L += Math.abs(position[i] - this.cur.left[i]);
      point_R += Math.abs(position[i] - this.cur.right[i]);
    }
    return { L: point_L, R: point_R };
  }
  getPosition(num) {
    return pad
      .map((row, i) => {
        const j = row.indexOf(num);
        return j !== -1 ? [i, j] : false;
      })
      .filter((e) => e)
      .flat(1);
  }
  getAnswer() {
    let answer = "";
    this.numbers.map((num) => {
      const position = this.getPosition(num);
      if (position[1] === 0) {
        answer += this.savePosition("left", position);
      } else if (position[1] === 2) {
        answer += this.savePosition("right", position);
      } else {
        let points = this.closedHand(position);
        if (points.L === points.R) {
          answer += this.savePosition(this.hand, position);
        } else if (points.L < points.R) {
          answer += this.savePosition("left", position);
        } else {
          answer += this.savePosition("right", position);
        }
      }
    });
    return answer;
  }
}
function solution(numbers, hand) {
  const pad = new Pad(numbers, hand);
  return pad.getAnswer();
}