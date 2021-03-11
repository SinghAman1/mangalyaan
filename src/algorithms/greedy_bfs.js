import { getNeighbours, minHeap } from "./utility";

export const Greedy_BFS = ( grid, startNode, finishNode) => {  
    const visitedNodesInOrder = [];
    let openList = new minHeap();
    startNode.h = getDistance(startNode, finishNode); 
  startNode.f = startNode.h;
  openList.push([startNode.f, startNode]);  


  while (!openList.isEmpty()) {
    // var currNode = new Node();
    let currArr = openList.getMin();
    let currNode = currArr[1]; 
    // console.log( currNode)(); 
    if( currNode === finishNode) 
     return  visitedNodesInOrder ; 
     if (currNode.isVisited || currNode.isWall) {
       continue;
     } 
     currNode.isVisited = true; 
     visitedNodesInOrder.push(currNode); 
     var neighboursIndex = getNeighbours(currNode.row, currNode.col, grid);
     let neighbours = [];
     neighboursIndex.forEach((indices) => {
       let m = indices[0];
       let n = indices[1];
       let neighbour = grid[m][n];
       neighbours.push(neighbour);
     }); 
     updateNeighbours(neighbours, currNode,"aStar",  finishNode); 
     for (let i = 0; i < neighbours.length; i++) {
       let neighbour = neighbours[i];
       visitedNodesInOrder.push(currNode); 
       openList.push([neighbour.f, neighbour]);
     }   
 }  
 
 while (!openList.isEmpty()) {
    // let cell = new Node();
    let arr = openList.getMin();
    let cell = arr[1];
    if (cell.isVisited || cell.isWall) {
      continue;
    }
    cell.isVisited = true;
    // nodesToAnimate.push([cell, "visited"]); 
    visitedNodesInOrder.push(cell); 
  }
  openList.clear();
  return visitedNodesInOrder;

}


function updateNeighbours(neighbours, currNode, algo, endNode) {
  // if (algo === "aStar") {
    neighbours.forEach((neighbour) => {
      neighbour.h = neighbour.weight + getDistance(neighbour, endNode);
    var newf = neighbour.h;
    if (newf < neighbour.f) neighbour.f = newf;
    neighbour.parent = currNode;
    });
  // }
}

  function getDistance(nodeA, nodeB) {
    const diagonal = document.getElementById("diagonal-flag").checked;
    var dx = Math.abs(nodeA.row - nodeB.row);
    var dy = Math.abs(nodeA.col - nodeB.col);
    if (diagonal === false) {
      //Manhattan Distance
      return dx + dy;
    } else {
      // Diagonal Distance
      if (dx > dy) {
        return (1.4 * dy) + (1 * (dx - dy));
      }
      return (1.4 * dx) + (1 * (dy - dx));
    }
  } 


  export const getNodesInShortestPathOrderOfGreedyBfs = ( finishNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.parent;
    } 
  //  console.log(currentNode.parent ); 
    return nodesInShortestPathOrder;
 }