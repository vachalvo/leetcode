public class Solution {
    private void dfs(int[][] image, int row, int col, int prevColor, int newColor)
    {
        if(image[row][col] == prevColor)
        {
            image[row][col] = newColor;
            if (row > 0) dfs(image, row - 1, col, prevColor, newColor);
            if (col > 0) dfs(image, row, col - 1, prevColor, newColor);
            if (row + 1 < image.Length) dfs(image, row + 1, col, prevColor, newColor);
            if (col + 1 < image[0].Length) dfs(image, row, col + 1, prevColor, newColor);
        }
    }
    public int[][] FloodFill(int[][] image, int sr, int sc, int newColor)
    {
        if (image[sr][sc] != newColor)
            dfs(image, sr, sc, image[sr][sc], newColor);

        return image;
    }
}
