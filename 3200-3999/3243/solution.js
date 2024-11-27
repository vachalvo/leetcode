const createGraph = (n) => {
    return Object.fromEntries(
        Array.from({length: n - 1}, (_, i) => [i, [i + 1]])
    );
}

const findShortestPath = (graph, n) =>  {
    const queue = [];
    const visitSet = new Set();
    queue.push([0, 0])

    while(queue.length > 0) {
        const [curr, l] = queue.shift()

        if(curr === n - 1) return l

        graph[curr].forEach((adjPoint) => {
            if(!visitSet.has(adjPoint)) {
                queue.push([adjPoint, l + 1])
                visitSet.add(adjPoint)
            }
        })
    }

    return 0
}

const shortestDistanceAfterQueries = function (n, queries) {
    const res = []
    const graph = createGraph(n)

    queries.forEach(([from, to]) => {
        graph[from].push(to)
        res.push(findShortestPath(graph, n))
    })

    return res
};
