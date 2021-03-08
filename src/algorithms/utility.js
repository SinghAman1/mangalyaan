import '../navbar';
//import {Visualizer} from'../visulaizer/visualizer'

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
      if (rr >= 0 && rr < 20 && cc >= 0 && cc < 20) {
        if (grid[rr][cc].isVisited || grid[rr][cc].isWall === "true") {
          continue;
        } // if d < 4, push elements else if d >= 4, check for diagonal walls
        else if (d < 4) {
          neighbours.push([rr, cc]);
        } else if (
          d === 4 &&
          grid[i][j + 1].isWall !== "true" &&
          grid[i + 1][j].isWall !== "true"
        ) {
          neighbours.push([rr, cc]);
        } else if (
          d === 5 &&
          grid[i][j - 1].isWall !== "true" &&
          grid[i + 1][j].isWall !== "true"
        ) {
          neighbours.push([rr, cc]);
        } else if (
          d === 6 &&
          grid[i - 1][j].isWall !== "true" &&
          grid[i][j + 1].isWall !== "true"
        ) {
          neighbours.push([rr, cc])
        } else if (
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