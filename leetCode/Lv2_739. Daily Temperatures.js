// https://leetcode.com/problems/daily-temperatures/description/

//  Time Limit
// var dailyTemperatures = function(temperatures) {
//   const answer = [];
//   for(let i = 0; i < temperatures.length; i++) {
//     const index = temperatures.slice(i+1).findIndex(t => temperatures[i] < t) + 1;
//     answer.push(index);
//   }
//   return answer;
// };


// Runtime 8683ms, beats 5%
// var dailyTemperatures = function(temperatures) {
//   const answer = [];
//   for(let i = 0; i < temperatures.length; i++) {
//     for(let j = i; j < temperatures.length; j++) {
//       if(temperatures[i] < temperatures[j]) {
//         answer.push(j-i);
//         break;
//       } else if ( j === temperatures.length - 1){
//         answer.push(0);
//       }
//     }
//   }
//   return answer;
// };

var dailyTemperatures = function(temperatures) {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];
  
  for(let i = 0; i < temperatures.length; i++) {
    let top = stack[stack.length-1];

    while(stack.length && temperatures[top] < temperatures[i]) {
      const idx = stack.pop();
      answer[idx] = i - idx;
      top = stack[stack.length-1];
    }
    stack.push(i);
  }
  return answer;
};