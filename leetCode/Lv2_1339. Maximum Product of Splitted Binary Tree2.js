/**
 * https://leetcode.com/problems/maximum-product-of-splitted-binary-tree
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
var maxProduct = function (root) {

    // DFS로 순회하면서 현재 트리 합을 계속 저장하면서 
    // 전체 합을 구해두기

    const allSums = [];

    const getSum = (node) => {
        if (!node) return 0;

        const currentSum = node.val + getSum(node.left) + getSum(node.right);

        allSums.push(currentSum);
        return currentSum;
    }
    const totalSum = getSum(root)

    let maxProd = 0;
    const MOD = BigInt(1e9 + 7);

    for (let sum of allSums) {
        const currentProd = BigInt(sum) * BigInt(totalSum - sum);
        if (currentProd > maxProd) {
            maxProd = currentProd;
        }
    }

    return Number(maxProd % MOD);
};
