/**
 * https://leetcode.com/problems/maximum-matrix-sum
 * @param {number[][]} matrix
 * @return {number}
 *//**
 * @param {number[][]} matrix
 * @return {number}
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    // 1차원 배열로 펼쳐서 처리 (가독성을 위해 flat 사용)
    const flatMatrix = matrix.flat();
    
    let numberOfMinus = 0; // 행렬 내 음수(-)의 총 개수
    let sum = 0;           // 모든 요소의 절댓값 합
    let minimunABS = Infinity; // 가장 작은 절댓값을 저장 (초기값은 무한대)

    for (let i = 0; i < flatMatrix.length; i++) {
        const val = flatMatrix[i];
        const absNum = Math.abs(val); // 현재 요소의 절댓값
        
        // 1. 모든 숫자를 양수로 가정하고 합산
        sum += absNum;
        
        // 2. 음수의 개수를 카운트
        // 인접한 두 수의 부호를 바꾸는 연산을 반복하면, 
        // 음수 부호를 원하는 위치로 이동시키거나 짝수개의 음수를 제거할 수 있음
        if (val < 0) numberOfMinus++;
        
        // 3. 행렬에서 절댓값이 가장 작은 숫자 찾기
        // 만약 음수가 홀수개라면, 전체 합에서 이 가장 작은 값을 음수로 남겨야 손해가 최소화됨
        if (minimunABS > absNum) minimunABS = absNum;
    }

    /**
     * 결과 반환 로직:
     * - 음수가 짝수개(numberOfMinus % 2 === 0): 
     * 모든 음수를 연산을 통해 양수로 바꿀 수 있으므로 전체 합(sum) 반환.
     * * - 음수가 홀수개: 
     * 무조건 한 개의 숫자는 음수로 남음. 가장 작은 숫자(minimunABS)를 음수로 선택.
     * 이미 sum에는 minimunABS가 양수로 더해져 있으므로, 
     * 이를 음수로 바꾸기 위해 sum에서 해당 값을 두 번 뺌 (sum - 2 * min).
     */
    return numberOfMinus % 2 === 0 ? sum : sum - (minimunABS * 2);
};
