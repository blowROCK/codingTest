/**
 * https://leetcode.com/problems/minimum-time-visiting-all-points
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let awnser = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let cur = points[i];
        let next = points[i + 1];
        awnser += Math.max(
            Math.abs(next[0] - cur[0]), Math.abs(next[1] - cur[1])
        );
    }

    return awnser;
};
