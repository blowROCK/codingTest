// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const trucks = JSON.parse(JSON.stringify(truck_weights));
  const passed = [];
  const bridge = [];
  let bridgeWeight = 0;
  let count = 0;
  while (passed.length !== truck_weights.length) {
    count++;

    //다리를 지나감.
    if (typeof bridge[bridge_length - 1] === "number") {
      const truck = bridge.pop();
      bridgeWeight -= truck;
      if (truck > 0) passed.push(truck);
    }

    //지금 무게와 1번트럭이 통과 가능하면 트럭을 넣음.
    if (trucks[0] + bridgeWeight <= weight) {
      bridgeWeight += trucks[0];
      bridge.unshift(trucks.shift());
    } else {
      // 트럭을 못넣음.
      bridge.unshift(0);
    }
  }
  return count;
}