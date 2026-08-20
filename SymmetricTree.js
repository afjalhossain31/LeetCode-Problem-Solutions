var isSymmetric = function (root) {
    let queue = [root.left, root.right];

    while (queue.length > 0) {
        let left = queue.shift();
        let right = queue.shift();

        if (!left && !right) {
            continue;
        }

        if (!left || !right || left.val !== right.val) {
            return false;
        }

        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(right.left);
    }

    return true;
};

console.log(isSymmetric({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}));