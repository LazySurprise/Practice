class Graph {
    constructor() {
        this.numVertices = 0;
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
        this.numVertices += 1;
    }

    addEdge(vertexFrom, vertexTo) {
        if (!this.adjacencyList.get(vertexFrom)[vertexTo]) {
            this.adjacencyList.get(vertexFrom).push(vertexTo);
            if (!this.adjacencyList.get(vertexTo)[vertexFrom]) {
                this.adjacencyList.get(vertexTo).push(vertexFrom);
            }
        }
    }
    printEdge(value, key) {
        console.log(`    ${key}:  |  ${value}`);
    }
    printGraph() {
        console.log(" Vertex | Edges")
        console.log("--------|------")
        this.adjacencyList.forEach(this.printEdge);
    }

    breadthFirstSearch(startingNode, key) {
        let visited = Array(this.numVertices).fill(false);
        let queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let curNode = queue.shift();
            if (curNode === key) return "found"
            console.log(curNode);

            let neighbors = this.adjacencyList.get(curNode);

            for (let i = 0; i < neighbors.length; i++) {
                let vertex = neighbors[i];
                if (!visited[vertex]) {
                    visited[vertex] = true;
                    queue.push(vertex);
                }
            }
        }
        return -1
    }

    dftHelper(vertex, visited, key) {
        if (vertex === key) {
            return "found";
        }
        visited[vertex] = true;

        let neighbors = this.adjacencyList.get(vertex);

        for (let i in neighbors) {
            vertex = neighbors[i];
            if (!visited[vertex]) {
                return this.dftHelper(vertex, visited, key);
            }
        }
    }

    depthFirstSearch(startingNode, key) {
        let visited = Array(this.numVertices).fill(false);

        return this.dftHelper(startingNode, visited, key) || -1;
    }
}

const G = new Graph();

G.addVertex(1);
G.addVertex(2);
G.addVertex(3);
G.addVertex(4);
G.addVertex(5);
G.addVertex(6);
G.addVertex(7);

G.addEdge(1, 2);
G.addEdge(1, 3);
G.addEdge(1, 4);

G.addEdge(2, 5);
G.addEdge(2, 6);

G.addEdge(3, 7);

G.printGraph();
//let found = G.breadthFirstSearch(1, 7);
//console.log(`found: ${found}`);
let found = G.depthFirstSearch(1, 7);
console.log(`found: ${found}`);

