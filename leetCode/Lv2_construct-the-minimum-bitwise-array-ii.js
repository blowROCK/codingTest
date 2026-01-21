/**
 * https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    return nums.map(num => {
        // 1. 짝수(2)는 X OR (X+1)로 만들 수 없습니다 (결과는 항상 홀수)
        if (num % 2 === 0) return -1;

        // 2. 오른쪽 끝에서부터 연속된 1의 개수를 찾습니다.
        // 예: 7 (111) -> 3개, 13 (1101) -> 1개
        let temp = num;
        let count = 0;
        while (temp % 2 === 1) {
            temp = Math.floor(temp / 2);
            count++;
        }

        // 3. 가장 높은 자리의 1을 끕니다.
        // count가 3이면 2^2(즉, 4)를 빼주는 식입니다.
        // 7 - 2^(3-1) = 7 - 4 = 3
        let powerOfTwo = Math.pow(2, count - 1);
        return num - powerOfTwo;
    });
};
