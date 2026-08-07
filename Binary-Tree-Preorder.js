function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
var preorderTraversal = function(root) {
    let result = [];
    function traverse(node) {
        if (!node) {
            return;
        }
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);

    return result;
};
let root = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        new TreeNode(3)
    )
);

console.log(preorderTraversal(root));