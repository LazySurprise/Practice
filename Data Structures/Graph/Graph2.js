class Graph {
    constructor(n) {
        this.numVertices = n;
        this.adjacenyList = new Map();
    }

    addVertex(vertex) {
        this.adjacenyList.set(vertex, []);
        this.numVertices += 1;
    }

    addEdge(vertexFrom, vertexTo) {
        if (this.adjacenyList.get(vertexFrom).indexOf(vertexTo) === -1) {
            this.adjacenyList.get(vertexFrom).push(vertexTo);
            if (this.adjacenyList.get(vertexTo).indexOf(vertexFrom) === -1) {
                this.adjacenyList.get(vertexTo).push(vertexFrom);
            }
        }
    }

    printEdge(value, key, map) {
        console.log(`   ${key}:   | ${value}`);
    }
    printGraph() {
        console.log(" Vertex | Edges")
        console.log("--------|------")
        this.adjacenyList.forEach(this.printEdge)
    }

    breadthFirstSearch(startingNode) {
        let visited = Array(this.numVertices).fill(false);

        let queue = [];
        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let curNode = queue.shift();
            console.log(curNode)

            let neighbors = this.adjacenyList.get(curNode);
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i]]) {
                    visited[neighbors[i]] = true
                    queue.push(neighbors[i]);
                }
            }
        }
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true;
        //console.log(vertex);

        let neighbors = this.adjacenyList.get(vertex);

        for (let i in neighbors) {
            const vertex = neighbors[i]
            if (!visited[vertex]) {
                return this.dfsHelper(vertex, visited)
            }
        }
    }
    depthFirstSearch(startingNode) {
        let visited = Array(this.numVertices).fill(false);

        return this.dfsHelper(startingNode, visited) || -1;
    }
}

const G = new Graph(0);
G.addVertex(1);
G.addVertex(2);
G.addVertex(3);
G.addVertex(4);
G.addVertex(5);
G.addVertex(6);
G.addVertex(9);
G.addVertex(99);
G.addVertex(100);

G.addEdge(1, 9);
G.addEdge(1, 3);
G.addEdge(9, 99);
G.addEdge(9, 100);
G.addEdge(99, 2);
G.addEdge(3, 2);
G.addEdge(1, 2);
G.addEdge(1, 3);
G.addEdge(2, 3);
G.addEdge(2, 4);
G.addEdge(2, 5);
G.addEdge(3, 6);

G.printGraph();
//G.breadthFirstSearch(1);
console.log(G.depthFirstSearch(1));