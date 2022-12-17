// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b | 0
  }
  for(let i = 0; i < tokens.length; i++) {
    if(tokens[i] in operations) {
      tokens.splice(i-2, 3, operations[tokens[i]](parseInt(tokens[i-2]), parseInt(tokens[i-1])))
      i -= 2;
    }
  }
  return tokens[0];
};
