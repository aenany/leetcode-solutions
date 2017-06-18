/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var result = [];

var rightSideView = function (root) {
    if (root === null) {
        return result;
    } else {
        result.push(root.val);
        if (root.right !== null) {
            rightSideView(root.right);
        } else {
            return result;
        }
    }
};