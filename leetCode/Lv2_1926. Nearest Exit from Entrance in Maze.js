// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  const queue = [[...entrance, 0]];
  const DIR = [[1,0], [-1,0], [0,1], [0,-1]]
  maze[entrance[0]][entrance[1]] = '+';
  
  while(queue.length) {
    const [curY, curX, level] = queue.shift();
    if((curY === 0 || curY === maze.length - 1 || curX === 0 || curX === maze[0].length - 1) && !(curY === entrance[0] && curX === entrance[1])){
      return level;
    }
    for(const [y, x] of DIR) {
      const posY = y + curY;
      const posX = x + curX;
      if(maze[posY]?.[posX] === '.'){
        maze[posY][posX] = '+';
        queue.push([posY, posX, level+1])
      }
    }
  }
  return -1
};