import { getNeighbours } from "./utility";
 export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    // If we encounter a wall, we skip it.
    if (closestNode.isWall) continue;
    // If the closest node is at a distance of infinity,
    // we must be trapped and should therefore stop.
    if (closestNode.distance === Infinity) return visitedNodesInOrder;
    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnvisitedNeighbors(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
  
  let neighboursIndex = getNeighbours(node.row,node.col,grid);  
  //  console.log( neighboursIndex);
  let neighbours = [];
  neighboursIndex.forEach((indices) => {
    let m = indices[0];
    let n = indices[1];
    let neighbour =  grid[m][n];
    neighbours.push(neighbour);
  });
  // for (const neighbor of neighbours) {
  //   neighbor.distance = node.distance + 1;
  //   neighbor.previousNode = node;
  // } 
  updateNeighbours(neighbours, node, "dijkstra");
}


function updateNeighbours(neighbours, currNode, algo) {
  let row = currNode.row;
  let col = currNode.col;
  let DiagonalId = [
    `${row - 1}-${col - 1}`,
    `${row - 1}-${col + 1}`,
    `${row + 1}-${col - 1}`,
    `${row + 1}-${col + 1}`,
  ];
  if (algo === "dijkstra") {
    neighbours.forEach((neighbour) => { 
      //  if(!DiagonalId.includes( ))
      // console.log('aaa');

      if (!DiagonalId.includes(`${neighbour.row}-${neighbour.col}`)) {
        if (1 + neighbour.weight + currNode.distance < neighbour.distance) {
          neighbour.distance = 1 + neighbour.weight + currNode.distance;
          neighbour.parent = currNode;
          neighbour.previousNode = currNode;
        }
      } else {
        if (1.4 + neighbour.weight + currNode.distance < neighbour.distance) {
          neighbour.distance = 1.4 + neighbour.weight + currNode.distance; 
          // console.log( neighbour.distance);
          neighbour.parent = currNode;
          neighbour.previousNode = currNode;
        }
      }
    });
  }
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) { 
      if(! node.isWall===true)
      nodes.push(node);
    }
  }
  return nodes;
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrderOfDijkstra(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.parent;
  } 
//  console.log(currentNode.parent ); 
  return nodesInShortestPathOrder;
}