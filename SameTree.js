function isSameTree(p, q) {
    // 2tay na thakle same
    if (!p && !q) {
        return true;
    }
    // jekono ekta na thakle different
    if (!p || !q) {
        return false;
    }
    // value different hole different
    if (p.val !== q.val) {
        return false;
    }
    // left & right compare
    return isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);

}



console.log(isSameTree([1, 2, 3], [1, 2, 3]));
console.log(isSameTree([1, 2], [1, null, 2]));
console.log(isSameTree([1, 2, 1], [1, 1, 2]));