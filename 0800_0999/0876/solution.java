/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        int length = 0;
        ListNode node = head;
        while(node != null) {
            length++;
            node = node.next;
        }

        int middleIndex = length / 2;
        length = 0;
        node = head;
        while(length != middleIndex) {
            node = node.next;
            length++;
        }
        return node;
    }
}
