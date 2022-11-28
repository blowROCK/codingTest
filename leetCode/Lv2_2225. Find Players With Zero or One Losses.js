// https://leetcode.com/problems/find-players-with-zero-or-one-losses/


/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const neverLost = new Set();
    const oneLost = new Set();
    const losers = new Set();

    for(let i = 0; i < matches.length; i++) {
        const [winner, loser] = matches[i];

        if(oneLost.has(loser)){
            oneLost.delete(loser);
        } else if(!losers.has(loser)) {
            oneLost.add(loser);
        }

        losers.add(loser);

        if(!losers.has(winner)) {
            neverLost.add(winner);
        }
        if(neverLost.has(loser)){
            neverLost.delete(loser);
        }
    }
    return [[...neverLost].sort((a,b)=>a-b), [...oneLost].sort((a,b)=>a-b)]
};