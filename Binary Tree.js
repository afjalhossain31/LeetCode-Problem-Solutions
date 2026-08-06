var inorderTraversal = function(root) {
    
    let result = [];
    function dfs(node) {
        if (node === null) {
            return;
        }
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
};

console.log(inorderTraversal([1, null, 2, 3])); 
console.log(inorderTraversal([])); 
console.log(inorderTraversal([1]));