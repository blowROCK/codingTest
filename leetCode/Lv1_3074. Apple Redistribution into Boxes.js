/**
 * https://leetcode.com/problems/apple-redistribution-into-boxes
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
 
// 처음 푼 문제
var minimumBoxes = function(apple, capacity) {
    const apples = apple.reduce((cur, acc) => acc += cur, 0)
    let sum = 0;
    let answer = 0;
    const sorted = capacity.sort((a, b) => b - a);
    
    for(let i = 0; i < sorted.length; i++){
        sum += sorted[i];
        if(sum >= apples) {
            answer = (i+1);
            break;
        }
    }
    return answer;
};


// While과 sum으로 더하는 방식이 빼는 방식으로 최적화
var minimumBoxes = function(apple, capacity) {
    let apples = apple.reduce((cur, acc) => acc + cur, 0)
    capacity.sort((a, b) => b - a);
    
    let idx = 0;
    while(apples > 0) {
        apples -= capacity[idx++]
    }
    return idx;
};
출처: https://error404.co.kr/121 [.Zzumbong:티스토리]
