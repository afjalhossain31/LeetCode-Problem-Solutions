var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};
console.log(maxDepth(root));


// Assuming you have a TreeNode class defined as follows:
// class TreeNode {
//     constructor(val, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// Create the tree: [3, 9, 20, null, null, 15, 7]
//       3
//      / \
//     9  20
//       /  \
//      15   7

// let root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

