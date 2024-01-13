class Graph  {
  numsOfNodes: number;
  adjacencyList: Map<number, number[]>;
  constructor(){
    this.numsOfNodes = 0;
    this.adjacencyList = new Map();
  } 

  addVertex(node: number){
    if (this.adjacencyList.has(node)) {
      return false;
    }
    this.adjacencyList.set(node, []);
    this.numsOfNodes++;
    return true;
  }

  addEdge(node1: number, node2: number){
    if (node1 === node2) {
      return false;
    }
    let vertex1 = this.adjacencyList.get(node1)
    let vertex2 = this.adjacencyList.get(node2)
    if (!vertex1 || !vertex2) {
      return false;
    }

    let index1 = vertex1.findIndex(a => a== node2);
    let index2 = vertex2.findIndex(a => a== node1);

    if (index1 == -1) {
      vertex1.push(node2)
    }

    if (index2 == -1) {
      vertex2.push(node1)
    }

    return 2
  }

  showConnection(){
    for (const [key, value] of this.adjacencyList) {
      console.log(`${key} => ${value.toString().replace(",", " ")}`);
      
    }
    
  }

  hasConnection(node1: number, node2: number): boolean{
    let vertex1 = this.adjacencyList.get(node1)
    let vertex2 = this.adjacencyList.get(node2)
    if (!vertex1 || !vertex2) {
      return false;
    }
    let index1 = vertex1.findIndex(a => a == node2);
    let index2 = vertex2.findIndex(a => a == node1);

    if (index1 > -1 && index2 > -1) {
      return true;
    }

    return false;
  }
}

const graph = new Graph();
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(5, 4)
graph.addEdge(4, 3)
graph.addEdge(5, 3)
graph.addEdge(2, 4)
console.log(graph.showConnection());
