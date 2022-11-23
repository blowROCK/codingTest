// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let visited = {};
    let totalCount = 0;
    
    const dfs = (index) =>{
        visited[index] = 1;
        let row = stones[index][0];
        let column = stones[index][1];
        let removedCount = 0;
        for(let i =0;i<stones.length;i++){
            if(!visited[i]  && (stones[i][0] == row || stones[i][1] == column)){
                removedCount += dfs(i)+1;
            }
        }
        return removedCount;
    }
    
    for(let i =0;i<stones.length;i++){
        if(!visited[i]) totalCount+=dfs(i);
    }
    return totalCount;
};