import { minHeap, getNeighbours } from "./utility.js";
import Node from "../node/node";
import '../visulaizer/navbar';

//Invoked when start visualizing is 'CLICKED'
//Get the start and end node
function updateNeighbours(neighbours, currNode, algo,finishNode) {
  if (algo === "aStar") {
    neighbours.forEach((neighbour) => {
      var newGCost = currNode.g + neighbour.weight;

      //Whenever weights are involved f(n) = g(n) + W*h(n)
      let estimation_cost = getDistance(neighbour, finishNode);
      let newCost = newGCost + estimation_cost;
      if (newCost < neighbour.f) {
        neighbour.g = newGCost;
        neighbour.f = newCost;
        neighbour.h = estimation_cost;
        neighbour.parent = currNode;
      }
    });
  }
}
//Astar Algorithm
function getDistance(nodeA, nodeB) {
  const diagonal = document.getElementById("diagonal-flag").checked;
  var dx = Math.abs(nodeA.row - nodeB.row);
  var dy = Math.abs(nodeA.col - nodeB.col);
  if (diagonal === false) {
    //Manhattan Distance
    return dx + dy;
  } else {
    if (dx > dy) {
      //Better results than using sqrt(2) and 1
      return 1.4 * dy + 1 * (dx - dy);
    }
    return 1.4 * dx + 1 * (dy - dx);
  }
}
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder=[];
  nodesInShortestPathOrder.push(finishNode);
  let currNode = new Node();
  currNode = finishNode.parent;
  console.log(currNode);
  while (currNode !== null) {
    nodesInShortestPathOrder.push(currNode);
    currNode = currNode.parent;

    // console.log(currNode.f);
    // console.log(currNode.g);
    // console.log(currNode.h);
  }
  return nodesInShortestPathOrder;
}

// export function getNodesInShortestPathOrder(finishNode) {
  
//   const nodesInShortestPathOrder = [];
//   let currentNode =new Node();
//   currentNode= finishNode;
//   console.log(currentNode);
//   while (currentNode !== null) {
    
//     nodesInShortestPathOrder.push(currentNode);
//     currentNode = currentNode.parent;
//     console.log(currentNode);

  
// }
//   return nodesInShortestPathOrder;
// }
 export function astar(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  //const nodesInShortestPathOrder=[];
  let openList = new minHeap();
  startNode.g = 0;
  startNode.h = getDistance(startNode, finishNode);
  startNode.f = startNode.g + startNode.h;

  openList.push([startNode.f, startNode]);

  while (!openList.isEmpty()) {
    var currNode = new Node();
    let currArr = openList.getMin();
    currNode = currArr[1];

    if (currNode=== finishNode) {
      //pathFound = true;
      //console.log('end');
      //getNodesInShortestPathOrder(finishNode);
    
      break;
    }
    if (currNode.isVisited) {
      continue;
    }
    currNode.isVisited = true;
    visitedNodesInOrder.push(currNode);

    var neighboursIndex = getNeighbours(currNode.row, currNode.col,grid);
    let neighbours = [];
    neighboursIndex.forEach((indices) => {
      let m = indices[0];
      let n = indices[1];
      let neighbour = new Node();
      neighbour = grid[m][n];
      neighbours.push(neighbour);
    });
    updateNeighbours(neighbours, currNode, "astar", finishNode);
    //console.log("astar neigh", neighbours);
    for (let i = 0; i < neighbours.length; i++) {
      let neighbour = neighbours[i];
      visitedNodesInOrder.push(neighbour);
      openList.push([neighbour.f, neighbour]);
    }
  }
  while (!openList.isEmpty()) {
    let cell = new Node();
    let arr = openList.getMin();
    cell = arr[1];
    if (cell.isVisited) {
      continue;
    }
    cell.isVisited = true;
    visitedNodesInOrder.push(cell);
  }
  openList.clear();
  return visitedNodesInOrder;
};
//export { astar };