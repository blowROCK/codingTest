// https://leetcode.com/problems/basic-calculator/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s+/g, '');
  let sum = 0;
  let sign = 1;
  const stack = [];
  for(let i = 0; i < s.length; i++){
    if(s[i] === '+'){
      sign = 1
    } else if (s[i] === '-'){
      sign = -1;
    } else if (s[i] === '('){
      stack.push(sum);
      stack.push(sign);
      sum = 0;
      sign = 1;
    } else if (s[i] === ')'){
      sum = stack.pop() * sum;
      sum += stack.pop();
    } else {
      let num = 0;
      while(s[i] >= '0' && s[i] <= '9') {
        num = (num*10) + Number(s[i])
        i++;
      }
      sum = sum + (num * sign)
      i--;
    }
  }
  return sum;
};