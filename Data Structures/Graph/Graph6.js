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

    breadthFirstSearch(startingVertex, key) {
        let visited = {};
        let queue = [];

        queue.push(startingVertex);
        
        while (queue.length > 0) {
            let curV = queue.shift();
            if (curV === key) return "found";
            visited[curV] = true;

            let neighbors = this.adjacencyList.get(curV);
            for (let i = 0; i < neighbors.length; i++) {
                let curNeigh = neighbors[i];
                if (!visited[curNeigh]) {
                    queue.push(curNeigh);
                    visited[curNeigh] = true;
                }
            }
        }

        return "not found";
    }

    dfsHelper(vertex, visited, key) {
        if (vertex === key) console.log("found");
        visited[vertex] = true;
        console.log(vertex)

        let neighbors = this.adjacencyList.get(vertex);
        for (let i in neighbors) {
            let vertex = neighbors[i];
            if (!visited[vertex]) {
                this.dfsHelper(vertex, visited, key);
            }
        }
    }

    depthFirstSearch(startingVertex, key) {
        let visited = {};
        this.dfsHelper(startingVertex, visited, key);
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
let found = G.breadthFirstSearch(1, 4);
//console.log(`found: ${found}`);
console.log(G.depthFirstSearch(1, 7))