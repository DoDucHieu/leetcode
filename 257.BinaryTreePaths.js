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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []

    const dfs = (node, path) => {
        if(node.left === null && node.right === null) result.push(`${path}${node.val}`)
        if(node.left !== null) dfs(node.left, `${path}${node.val}->`)
        if(node.right !== null) dfs(node.right, `${path}${node.val}->`)
    }

    dfs(root, "")
    return result
};