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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode root = new ListNode();
    ListNode actual = root;

    while(list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            actual.next = new ListNode(list1.val);
            actual = actual.next;
            list1 = list1.next;
        }
        else{
            actual.next = new ListNode(list2.val);
            actual = actual.next;
            list2 = list2.next;
        }

    }
    actual.next = list1 == null ? list2 : list1;

    return root.next;
    }
}
