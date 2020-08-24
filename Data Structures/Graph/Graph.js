import { Stack } from '../Stack.js';

class Graph { 
    constructor(numVertices) { 
        this.numVertices = numVertices; 
        this.AdjList = new Map(); 
    } 
  
    addVertex(vertex) {
        this.AdjList.set(vertex, []);
        this.numVertices += 1;
    }

    addEdge(vertexFrom, vertexTo) {
        this.AdjList.get(vertexFrom).push(vertexTo);
    }

    printEdge(value, key, map) {
        console.log(`   ${key}:   | ${value}`);
    }
    printGraph() {
        console.log(" Vertex | Edges")
        console.log("--------|------")
        console.log(this.adjacenyList)

        this.AdjList.forEach(this.printEdge)
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        let neighbors = this.AdjList.get(vertex);

        for (let i in neighbors) {
            let vertex = neighbors[i];
            if (!visited[vertex]) {
                this.dfsHelper(vertex, visited);
            }
        }
    }

    depthFirstSearch(startingVertex) {
        let visited = [];

        for (let i in this.numVertices) {
            visited[i] = false;
        }

        this.dfsHelper(startingVertex, visited);
    }


} 

const G = new Graph(0);
G.addVertex(1);
G.addEdge(1, 9);
G.addEdge(1, 3);
G.addVertex(2);
G.addVertex(9);
G.addEdge(9, 99);
G.addVertex(99);
G.addEdge(99, 2);
G.addVertex(3);
G.addEdge(3, 2);

G.addVertex(2);
G.addVertex(3);
G.addEdge(1, 2);
G.addEdge(1, 3);
G.addEdge(2, 3);
G.printGraph();
G.depthFirstSearch(1);
