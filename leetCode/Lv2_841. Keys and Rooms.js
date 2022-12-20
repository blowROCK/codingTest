// https://leetcode.com/problems/keys-and-rooms/description/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const visited = new Set();
  
  const dfs = (roomIndex) => {
    if(visited.has(roomIndex)) return;
    visited.add(roomIndex);
    for(let i = 0; i < rooms[roomIndex].length; i++) {
      dfs(rooms[roomIndex][i]);
    }
  }
  dfs(0);
  return visited.size === rooms.length;
};