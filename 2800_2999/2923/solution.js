var findChampion = function(grid) {
    let maxSum = -1
    let champion = -1

    grid.forEach((teamRow, teamIndex) => {
        const sum = teamRow.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);

        if(sum > maxSum) {
            maxSum = sum
            champion = teamIndex
        }
    })

    return champion
};
