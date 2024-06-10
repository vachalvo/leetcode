/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    public void preorder(List<Integer> list, TreeNode node){
        list.add(node.val);
        if(node.left != null) preorder(list, node.left);
        if(node.right != null) preorder(list, node.right);
    }

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new LinkedList<Integer>();
        if(root == null) return res;
        preorder(res, root);
        return res;
    }
}
