// https://school.programmers.co.kr/learn/courses/30/lessons/62048

function solution(width, hight) {
  let w = width;
  let h = hight;
  let GCDs = [];
  let divider = 2;

  while (divider <= w && divider <= h) {
    if (w % divider === 0 && h % divider === 0) {
      w = w / divider;
      h = h / divider;
      GCDs.push(divider);
      divider = 1;
    }
    divider++;
  }

  return width * hight - (width + hight - GCDs.reduce((a, b) => a * b, 1));
}