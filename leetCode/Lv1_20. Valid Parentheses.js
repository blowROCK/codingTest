// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // ({[]}) ??
  const array = [];
  var map = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
      array.push(s[i]);
    } else if(map[array.pop()] !== s[i]){
      return false;
    }
  }
  return array.length === 0
};