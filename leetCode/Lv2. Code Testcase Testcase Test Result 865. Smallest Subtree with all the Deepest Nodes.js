/**
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
    const dfs = (node) => {
        if (!node) return { depth: 0, node: null };

        let L = dfs(node.left);
        let R = dfs(node.right);

        if (L.depth === R.depth) {
            return { depth: L.depth + 1, node: node };
        } else if (L.depth > R.depth) {
            return { depth: L.depth + 1, node: L.node };
        } else {
            return { depth: R.depth + 1, node: R.node };
        }
    };
    return dfs(root).node;
};
