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

    // grab first vertex in adjacency list
    // add vertex to queue
    // remove vertex from queue
    // visit all possible edges
    // add each edge to queue
    // repeat 2, 3, 4
    breadthFirstSearch(startingVertex, key) {
        let visited = {}
        let queue = [];

        visited[startingVertex] = true;
        queue.push(startingVertex);

        while (queue.length > 0) {
            let curV = queue.shift();
            if (curV === key) return "found";
            let neighbors = this.adjacencyList.get(curV);
            for (let i = 0; i < neighbors.length; i++) {
                let curNeigh = neighbors[i];
                if (!visited[curNeigh]) {
                    visited[curNeigh] = true;
                    queue.push(curNeigh);
                }
            }
        }
        return -1
    }

    dfsHelper(startingVertex, visited, key) {
        if (startingVertex === key) return "found";

        visited[startingVertex] = true;

        let neighbors = this.adjacencyList.get(startingVertex);

        for (let i = 0; i < neighbors.length; i++) {
            let curN = neighbors[i];
            if (!visited[curN]) {
                return this.dfsHelper(curN, visited, key);
            }
        }
    }

    depthFirstSearch(startingVertex, key) {
        let visited = Array(this.numVertices).fill(false);
        return this.dfsHelper(startingVertex, visited, key) || "not found";
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
let found = G.depthFirstSearch(1, 3);
console.log(`found: ${found}`);