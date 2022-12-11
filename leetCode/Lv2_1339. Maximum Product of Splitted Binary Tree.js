// https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/

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
var maxProduct = function(root) {
  let total = 0;
  const sums = [];
  const dfs = (node) => {
    if(!node) return 0;

    const l = dfs(node.left)
    const r = dfs(node.right)
    const sum = node.val + l + r;

    sums.push(sum);
    total += node.val;
    return sum;
  }
  dfs(root);
  let max = 0;
  for(const sum of sums){
    max = Math.max(max, (total-sum) * sum);
  }
  return max % (1e9 + 7);
};