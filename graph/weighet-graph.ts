type Edge = {
  name: number;
  weight: number;
}

class WeightedGraph  {
  numsOfNodes: number;
  adjacencyList: Map<number, Edge[]>;
  constructor(){
    this.numsOfNodes = 0;
    this.adjacencyList = new Map();
  } 

  addVertex(node: number): boolean{
    if (this.adjacencyList.has(node)) {
      return false;
    }
    this.adjacencyList.set(node, []);
    this.numsOfNodes++;
    return true;
  }

  addEdge(node1: number, node2: number, weight: number): boolean{
    if (node1 === node2) {
      return false;
    }
    let vertex1 = this.adjacencyList.get(node1)
    let vertex2 = this.adjacencyList.get(node2)
    if (!vertex1 || !vertex2) {
      return false;
    }

    let index1 = vertex1.findIndex(a => a.name == node2);
    let index2 = vertex2.findIndex(a => a.name == node1);

    if (index1 == -1) {
      vertex1.push({name: node2, weight})
    }
    if (index2 == -1) {
      vertex2.push({name: node1, weight})
    }

    return true;
  }

  showConnection(): void{
    for (const [key, value] of this.adjacencyList) {
      console.log(`${key} => ${value.map(a => a.name)}`);
    }
  }

  hasConnection(node1: number, node2: number): boolean{
    let vertex1 = this.adjacencyList.get(node1)
    let vertex2 = this.adjacencyList.get(node2)
    if (!vertex1 || !vertex2) {
      return false;
    }
    let index1 = vertex1.findIndex(a => a.name == node2);
    let index2 = vertex2.findIndex(a => a.name == node1);

    if (index1 > -1 && index2 > -1) {
      return true;
    }

    return false;
  }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex(2);
weightedGraph.addVertex(3);
weightedGraph.addVertex(4);
weightedGraph.addVertex(5);
weightedGraph.addEdge(5, 4, 2)
weightedGraph.addEdge(4, 3, 2)
weightedGraph.addEdge(5, 3, 5)
weightedGraph.addEdge(2, 4, 4)
weightedGraph.showConnection()
weightedGraph.hasConnection(2, 4)
console.log(weightedGraph.hasConnection(2, 5));
console.log(weightedGraph.hasConnection(2, 4));
