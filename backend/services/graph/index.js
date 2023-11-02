class Graph {

    constructor() {
      this.graph = {};
    }
  
    addVertex(vertex) {
      if (!this.graph[vertex]) {
        this.graph[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2, weight) {
      if (!this.graph[vertex1] || !this.graph[vertex2]) {
        throw new Error("Both vertices must exist in the graph.");
      }
  
      this.graph[vertex1].push({ node: vertex2, weight });
      this.graph[vertex2].push({ node: vertex1, weight });
    }
  
    getVertices() {
      return Object.keys(this.graph);
    }
  
    getEdges(vertex) {
      return this.graph[vertex];
    }

    dijkstra(source) {
        const vertices = this.getVertices();
        const distances = {};
        const previous = {};
        const visited = {};
    
        
        vertices.forEach((vertex) => {
          distances[vertex] = vertex === source ? 0 : Infinity;
          previous[vertex] = null;
        });
    
        while (true) {
          let currentVertex = null;
          for (const vertex of vertices) {
            if (!visited[vertex] && (currentVertex === null || distances[vertex] < distances[currentVertex])) {
              currentVertex = vertex;
            }
          }
    
          if (currentVertex === null) {
            break;
          }
    
          visited[currentVertex] = true;

          for (const neighbor of this.getEdges(currentVertex)) {
            const totalDistance = distances[currentVertex] + neighbor.weight;
            if (totalDistance < distances[neighbor.node]) {
              distances[neighbor.node] = totalDistance;
              previous[neighbor.node] = currentVertex;
            }
          }
        }
    
        return { distances, previous };
      }
    
      getShortestPathCost(source, destination) {
        const { distances } = this.dijkstra(source);
        return distances[destination];
      }

}

let graphInstance = null;

function getGraph() {

  if (!graphInstance) {
    graphInstance = new Graph();
    graphInstance.addVertex('A');
    graphInstance.addVertex('B');
    graphInstance.addVertex('C');
    graphInstance.addVertex('D');
    graphInstance.addVertex('E');
    graphInstance.addVertex('F');

    graphInstance.addEdge('A','B',5);  
    graphInstance.addEdge('A','C',7);  
    graphInstance.addEdge('B','D',15);  
    graphInstance.addEdge('C','D',5);  
    graphInstance.addEdge('B','E',20);  
    graphInstance.addEdge('E','F',10);  
    graphInstance.addEdge('D','F',20);  
    graphInstance.addEdge('C','E',35);  
  }
  return graphInstance;

}

module.exports = getGraph;