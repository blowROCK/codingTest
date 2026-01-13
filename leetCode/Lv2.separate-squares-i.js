/**
 * https://leetcode.com/problems/separate-squares-i
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
    let totalArea = 0;
    let minY = Infinity;
    let maxY = -Infinity;

    for (let [x, y, l] of squares) {
        totalArea += l * l
        minY = Math.min(y, minY)
        maxY = Math.max(y+l, maxY)
    }
    const targetArea = totalArea / 2;

    // 특정 Y에 따라 넓이를 계산하기
    // 전체 넓이 1/2 계산하기 <= 특정 Y 일때
    const getAreaBelow = (lineY) => {
        let areaSum = 0;
        for (let i = 0; i < squares.length; i++) {
            const [x, y, l] = squares[i];

            if (lineY <= y) {
                continue;
            } else if (lineY >= y + l) {
                areaSum += l * l;
            } else {
                areaSum += (lineY - y) * l;
            }
        }
        return areaSum;
    };

    // 특정 Y의 를 이용한 2진탑색
    let low = minY;
    let high = maxY;
    for (let i = 0; i < 100; i++) {
        let mid = (low + high) / 2;

        if (getAreaBelow(mid) >= targetArea) {
            high = mid;
        } else {
            low = mid;
        }
    }
    return low;
};


// 좋은 코드 
/**
 * @param {number[][]} squares
 * @return {number}
 */
function helper(line, squares) {
    let aAbove = 0, aBelow = 0;
    let n = squares.length;

    for (let i = 0; i < n; i++) {
        let x = squares[i][0], y = squares[i][1];
        let l = squares[i][2];
        let total = l * l;

        if (line <= y) {
            aAbove += total;
        } else if (line >= y + l) {
            aBelow += total;
        } else {
            let aboveHeight = (y + l) - line;
            let belowHeight = line - y;
            aAbove += l * aboveHeight;
            aBelow += l * belowHeight;
        }
    }

    return aAbove - aBelow;
}

var separateSquares = function (squares) {
    let lo = 0, hi = 2e9;

    for (let i = 0; i < 60; i++) {
        let mid = (lo + hi) / 2.0;
        let diff = helper(mid, squares);

        if (diff > 0) lo = mid;
        else hi = mid;
    }

    return hi;
};
