// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor

/**
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
var maxAncestorDiff = function(root) {
  const dfs = (node, max, min) => {
    if(!node) return Math.abs(max - min);

    max = Math.max(max, node.val)
    min = Math.min(min, node.val)

    let leftMax = dfs(node.left, max, min);
    let rightMax = dfs(node.right, max, min);
    return Math.max(leftMax, rightMax)
  }
  return dfs(root, 0, Infinity);
};
