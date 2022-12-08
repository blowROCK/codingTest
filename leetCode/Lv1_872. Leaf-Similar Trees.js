// https://leetcode.com/problems/leaf-similar-trees/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const getLastNode = (root) => {
    let nodes = '';
    const dfs = (node) => {
      if(node.left) dfs(node.left)
      if(node.right) dfs(node.right)
      if(!node.left && !node.right) nodes += `/${node.val}`
    }
    dfs(root);
    return nodes;
  }
  return getLastNode(root1) === getLastNode(root2);
};