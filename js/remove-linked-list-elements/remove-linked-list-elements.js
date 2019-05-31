/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeElements = function (head, val) {
    if (head.val == val) {
        head.val = head.next;
    } else {
        removeElements(head.next);
    }
};