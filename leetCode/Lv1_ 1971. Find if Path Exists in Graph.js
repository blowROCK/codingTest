// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if(n < 2) return true;

  const map = {}
  edges.forEach(([a, b]) => {
    if(map[a]) map[a].push(b);
    else map[a] = [b];

    if(map[b]) map[b].push(a);
    else map[b] = [a];
  }, {})

  const visited = {};
  let answer = false;
  const dfs = (from) => {
    if(!map[from]) return null;
    visited[from] = true;

    if(from === destination) answer = true;

    map[from].forEach(el => {
      if(!visited[el]) dfs(el);
    })
  }

  dfs(source);

  return answer;
};
