/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    let maxSum = -Infinity;
    let maxLevel = 1;
    let level = 1;
    let que = [root];

    while (que.length > 0) {
        let currentSize = que.length;
        let currentSum = 0;
        for (let i = 0; i < currentSize; i++) {
            let node = que.shift();
            currentSum += node.val;

            if (node.left) que.push(node.left);
            if (node.right) que.push(node.right);
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxLevel = level;
        }
        level++;
    }
    return maxLevel;
};

// bfs?
// 1 2 4 8
