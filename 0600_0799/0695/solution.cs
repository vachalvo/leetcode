public class Solution {
    private int dfs(int[][] grid, bool[][] visit, int row, int col)
    {
        if(row < 0 || col < 0 || row >= grid.Length || col >= grid[0].Length || visit[row][col] || grid[row][col] == 0)
            return 0;

        visit[row][col] = true;

        return 1 + dfs(grid, visit, row - 1, col) + dfs(grid, visit, row, col - 1)
            + dfs(grid, visit, row + 1, col) + dfs(grid, visit, row, col + 1);
    }
    public int MaxAreaOfIsland(int[][] grid)
    {
        if (grid.Length == 0 || grid[0].Length == 0)
            return 0;

        bool[][] visit = new bool[grid.Length][];
        for (int i = 0; i < grid.Length; i++)
        {
            visit[i] = new bool[grid[i].Length];
        }

        int maxArea = 0;

        for(int i = 0; i < grid.Length; i++)
        {
            for(int j = 0; j < grid[i].Length; j++)
            {
                int candidate = dfs(grid, visit, i, j);
                maxArea = Math.Max(maxArea, candidate);
            }
        }

        return maxArea;
    }
}
