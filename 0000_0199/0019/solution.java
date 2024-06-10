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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if(head == null)
            return null;

        ListNode node = head;
        ListNode next = null;

        int length = 0;
        boolean isFound = false;

        while(node != null) {
            length++;

            if(next != null)
                next = next.next;

            if(length == n+1) {
                next = head;
                isFound = true;
            }

            node = node.next;
        }

        if(!isFound)
            return head.next;
        else {
            if(next == null)
                return null;

            ListNode nth = next.next;
            next.next = nth.next;
        }

        return head;
    }
}
