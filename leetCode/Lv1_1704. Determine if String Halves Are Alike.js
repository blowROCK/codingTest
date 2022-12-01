// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  s = s.toLowerCase();
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(vowels.includes(s[i])) {
      count = count + (i < s.length/2 ? -1 : +1) 
    }
  }
  return count === 0;
};