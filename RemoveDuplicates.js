class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

let result = deleteDuplicates(head);

let output = [];
let current = result;

while (current !== null) {
    output.push(current.val);
    current = current.next;
}

console.log(output);