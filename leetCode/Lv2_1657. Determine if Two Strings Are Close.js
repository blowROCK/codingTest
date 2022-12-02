// https://leetcode.com/problems/determine-if-two-strings-are-close/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 
const get = (word) => {
  const map = {};
  for(let i = 0; i < word.length; i++) {
    if(!map[word[i]]) map[word[i]] = 1;
    else map[word[i]]++;
  }
  return [Object.keys(map).sort((a,b)=>a>b?1:-1).join(''), Object.values(map).sort((a,b)=>a-b).join('')];
}
var closeStrings = function(word1, word2) {
  const a = get(word1);
  const b = get(word2);
  return a[0] === b[0] && a[1] === b[1];
};
