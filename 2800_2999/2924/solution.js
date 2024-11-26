var findChampion = function(n, edges) {
    const set = new Set([...Array(n).keys()])

    edges.forEach((edge) => {
        set.delete(edge[1])
    })

    if(set.size !== 1)
        return -1

    const [champion] = set;
    return champion
};
