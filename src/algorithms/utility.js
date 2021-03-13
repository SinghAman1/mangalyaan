import '../visulaizer/navbar';
import {no_of_column , no_of_row} from'../visulaizer/visualizer'

export class Queue {
    constructor() {
      this.items = new Array();
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    enqueue(element) {
      this.items.push(element);
      return;
    }
  
    empty() {
      return this.items.length === 0;
    }
  
    clear() {
      this.items = new Array();
      return;
    }
  }
  
  export function getNeighbours(i, j,grid) {
    let neighbours = [];
    // direction vectors
    // 0-3: East, South, West, North
    // 4-7: South-East, North-East, South-West, North-West
    const dx = [1, 0, -1, 0, 1, 1, -1, -1];
    const dy = [0, 1, 0, -1, 1, -1, 1, -1];
    const diagonal = document.getElementById("diagonal-flag").checked;
     
    let length; // length of direction vector
    if (diagonal === false) { 
        
      length = 4;
    } else length = 8;
  
    for (let d = 0; d < length; d++) {
      let rr = i + dx[d];
      let cc = j + dy[d];
      if (rr >= 0 && rr < no_of_row && cc >= 0 && cc < no_of_column) {
        if (grid[rr][cc].isVisited || grid[rr][cc].isWall === "true") {
          continue;
        } // if d < 4, push elements else if d >= 4, check for diagonal walls
        else if (d < 4) {
          neighbours.push([rr, cc]);
        }  
        else if (
          d === 4 &&
          grid[i][j + 1].isWall !== "true" &&
          grid[i + 1][j].isWall !== "true"
        ) {
          neighbours.push([rr, cc]);
        }  
        else if (
          d === 5 &&
          grid[i][j - 1].isWall !== "true" &&
          grid[i + 1][j].isWall !== "true"
        ) {
          neighbours.push([rr, cc]);
        }
         else if (
          d === 6 &&
          grid[i - 1][j].isWall !== "true" &&
          grid[i][j + 1].isWall !== "true"
        ) {
          neighbours.push([rr, cc])
        } 
        else if (
          d === 7 &&
          grid[i - 1][j].isWall !== "true" &&
          grid[i][j - 1].isWall !== "true"
        ) {
          neighbours.push([rr, cc]);
        }
      }
    }
    return neighbours;
  } 


  
  export class minHeap {
    constructor() {
      this.heap = [];
    }
    isEmpty() {
      return this.heap.length === 0;
    }
    clear() {
      this.heap = [];
      return;
    }
    getMin() {
      if (this.isEmpty()) {
        return null;
      }
      var min = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap[this.heap.length - 1] = min;
      this.heap.pop();
      if (!this.isEmpty()) {
        this.siftDown(0);
      }
      return min;
    }
    push(item) {
      this.heap.push(item);
      this.siftUp(this.heap.length - 1);
      return;
    }
    parent(index) {
      if (index === 0) {
        return null;
      }
      return Math.floor((index - 1) / 2);
    }
    children(index) {
      return [index * 2 + 1, index * 2 + 2];
    }
    siftDown(index) {
      var children = this.children(index);
      var leftChildValid = children[0] <= this.heap.length - 1;
      var rightChildValid = children[1] <= this.heap.length - 1;
      var newIndex = index;
      if (leftChildValid && this.heap[newIndex][0] > this.heap[children[0]][0]) {
        newIndex = children[0];
      }
      if (rightChildValid && this.heap[newIndex][0] > this.heap[children[1]][0]) {
        newIndex = children[1];
      }
      // No sifting down needed
      if (newIndex === index) {
        return;
      }
      var val = this.heap[index];
      this.heap[index] = this.heap[newIndex];
      this.heap[newIndex] = val;
      this.siftDown(newIndex);
      return;
    }
    siftUp(index) {
      var parent = this.parent(index);
      if (parent !== null && this.heap[index][0] < this.heap[parent][0]) {
        var val = this.heap[index];
        this.heap[index] = this.heap[parent];
        this.heap[parent] = val;
        this.siftUp(parent);
  }
      return;
    }
  }
  
  // export function getNeighbours(i, j,grid) {
  //   let neighbours = [];
  //   // direction vectors
  //   // 0-3: East, South, West, North
  //   // 4-7: South-East, North-East, South-West, North-West
  //   const dx = [1, 0, -1, 0, 1, 1, -1, -1];
  //   const dy = [0, 1, 0, -1, 1, -1, 1, -1];
  //   const diagonal = document.getElementById("diagonal-flag").checked;
     
  //   let length; // length of direction vector
  //   if (diagonal === false) { 
        
  //     length = 4;
  //   } else length = 8;
  
  //   for (let d = 0; d < length; d++) {
  //     let rr = i + dx[d];
  //     let cc = j + dy[d];
  //     if (rr >= 0 && rr < 20 && cc >= 0 && cc < 20) {
  //       //console.log(grid[rr][cc]);
  //       if (grid[rr][cc].isVisited || grid[rr][cc].isWall === "true") {
  //         continue;
  //       } // if d < 4, push elements else if d >= 4, check for diagonal walls
  //       else if (d < 4) {
  //         neighbours.push([rr, cc]);
  //       }  
  //       else if (
  //         d === 4 &&
  //         grid[i][j + 1].isWall !== "true" &&
  //         grid[i + 1][j].isWall !== "true"
  //       ) {
  //         neighbours.push([rr, cc]);
  //       }  
  //       else if (
  //         d === 5 &&
  //         grid[i][j - 1].isWall !== "true" &&
  //         grid[i + 1][j].isWall !== "true"
  //       ) {
  //         neighbours.push([rr, cc]);
  //       }
  //        else if (
  //         d === 6 &&
  //         grid[i - 1][j].isWall !== "true" &&
  //         grid[i][j + 1].isWall !== "true"
  //       ) {
  //         neighbours.push([rr, cc])
  //       } 
  //       else if (
  //         d === 7 &&
  //         grid[i - 1][j].isWall !== "true" &&
  //         grid[i][j - 1].isWall !== "true"
  //       ) {
  //         neighbours.push([rr, cc]);
  //       }
  //     }
  //   }
  //   return neighbours;
  // } 


  
  