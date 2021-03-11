import React, { Component } from 'react'; 
// import {  minHeap, getNeighbours } from "./utility";
import { getNeighbours, minHeap } from "./utility";

 export const AStar = ( grid, startNode, finishNode) => { 
   const visitedNodesInOrder = [];
   let openList = new minHeap(); 
   startNode.g = 0;
  startNode.h = getDistance(startNode, finishNode);
  startNode.f = startNode.g + startNode.h;
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
    updateNeighbours(neighbours, currNode, "aStar", finishNode); 
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
   if (algo === "aStar") {
     neighbours.forEach((neighbour) => {
       var newGCost = currNode.g + neighbour.weight;
 
       //Whenever weights are involved f(n) = g(n) + W*h(n)
       let estimation_cost = getDistance(neighbour, endNode);
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

 export const getNodesInShortestPathOrderOfAStar = ( finishNode) => {
   const nodesInShortestPathOrder = [];
   let currentNode = finishNode;
   while (currentNode !== null) {
     nodesInShortestPathOrder.unshift(currentNode);
     currentNode = currentNode.parent;
   } 
 //  console.log(currentNode.parent ); 
   return nodesInShortestPathOrder;
}
