import { Queue, getNeighbours } from "./utility";
import Node from "../node/node";



export function BFS(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
 // const nodesInShortestPathOrder=[];
  let myQueue = new Queue();
  
  startNode.isVisited = true;
  myQueue.enqueue(startNode);

  visitedNodesInOrder.push(startNode);
  let currNode = new Node();
  
  // dequeue till queue becomes empty or finds end node
  while (!myQueue.empty()) { 
    currNode = myQueue.dequeue(); 
    // if (currNode.isWall) {console.log(currNode.row)};
   
    if (currNode.isWall){ continue;}
    var r = currNode.row;
    var c = currNode.col;
    visitedNodesInOrder.push(currNode);
    if (currNode === finishNode) {
    // pathFound = true;
      break;
    }
    currNode.isVisited = true;
    var neighbours = getNeighbours(r, c,grid);
    // console.log(neighbours);
    for (var k = 0; k < neighbours.length; k++) {
      var m = neighbours[k][0];
      var n = neighbours[k][1];

      let node = new Node();
      node = grid[m][n];
      grid[m][n].isVisited = true;
      grid[m][n].parent = currNode;
     visitedNodesInOrder.push(node);
      myQueue.enqueue(node);
      // if(myQueue.items.empty){console.log('aa');}
      // console.log(myQueue);
    }
  }
    return visitedNodesInOrder; 
  }


export function getNodesInShortestPathOrderOfBFS(finishNode) {
  
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.parent;
  
}
  return nodesInShortestPathOrder;
}