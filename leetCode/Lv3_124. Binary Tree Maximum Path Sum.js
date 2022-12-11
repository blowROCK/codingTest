// https://leetcode.com/problems/binary-tree-maximum-path-sum/

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
var maxPathSum = function(root) {
  let max = -Infinity;
  const dfs = (node) => {
    if(!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    max = Math.max(max, node.val + left + right)
    console.log(left, right, node.val," = " , node.val+left+right)
    console.log(node.val + left, node.val + right)
    return Math.max(0, node.val + left, node.val + right);
  }
  dfs(root);
  return max;
};