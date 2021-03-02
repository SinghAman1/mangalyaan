import React, { Component } from 'react'; 

import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/dijkstra';
import Node from '../node/node'; 

import "./visualizer.css";


let START_NODE_ROW = 5;
let START_NODE_COL = 5;
let FINISH_NODE_ROW = 15;
let FINISH_NODE_COL = 15; 


export default class Visualizer extends Component {
    state = {  
        grid: [], 
        startchange: false,
        endchange: false, 
      mouseIsPressed: false,
     }  


     componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
      } 

      
  handleMouseDown=(row, col)=> { 
    if( row === START_NODE_ROW && col === START_NODE_COL) 
     {    this.setState({startchange:true,mouseIsPressed: true});   
     return;  }
    if( row === FINISH_NODE_ROW && col === FINISH_NODE_COL)  
    {  
      this.setState({endchange:true,mouseIsPressed: true});   
     return;  }
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  } 

  handleMouseEnter=(row, col) =>{
    if (!this.state.mouseIsPressed) return; 
    const{ startchange, endchange}= this.state;  
    if(startchange) 
    { 
      const newGrid =changeStartPoint(this.state.grid, row, col, 1);
      this.setState({grid: newGrid});
      START_NODE_ROW = row;
      START_NODE_COL = col;  
      const newstGrid =changeStartPoint(this.state.grid, row, col, 0, 1);
      this.setState({grid: newstGrid});
      
    }  
    else if(endchange) 
    { 
      const newGrid =changeEndPoint(this.state.grid, row, col, 1);
      this.setState({grid: newGrid});
     FINISH_NODE_ROW = row;
      FINISH_NODE_COL = col;  
      const newstGrid =changeEndPoint(this.state.grid, row, col,  0, 1);
      this.setState({grid: newstGrid});
      
    } 
   else { const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid}); }
  }

  handleMouseUp=(row,col)=> { 
    const{ startchange, endchange}= this.state; 
    if( startchange) { this.setState({startchange:false,mouseIsPressed: false}); }
  else  if( endchange) this.setState({endchange:false,mouseIsPressed: false}); 
    else  this.setState({mouseIsPressed: false}); 
  
  }   

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          // 'node node-visited'; 
          `node  ${ node.row===START_NODE_ROW && node.col===START_NODE_COL ?'node-start': 
          node.row===FINISH_NODE_ROW && node.col===FINISH_NODE_COL? 'node-finish':'node-visited'}`;
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          `node  ${ node.row===START_NODE_ROW && node.col===START_NODE_COL ?'node-start': 
           node.row===FINISH_NODE_ROW && node.col===FINISH_NODE_COL? 'node-finish':'node-shortest-path'}`;
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  } 

  resetGrid =()=> {
    //  const { grid} = this.state; 
     const grid = [];
     for (let row = 0; row < 20; row++) {
       const currentRow = [];
       for (let col = 0; col < 20; col++) {
         currentRow.push(createNode(col, row)); 
         document.getElementById(`node-${row}-${col}`).className =
        `node  ${ row===START_NODE_ROW && col===START_NODE_COL ?'node-start': 
         row===FINISH_NODE_ROW && col===FINISH_NODE_COL? 'node-finish':''}`;
      
       }
       grid.push(currentRow);
     }
       this.setState({ grid});
    // console.log(grid); 
  }


    render() {   
      
        const {grid,mouseIsPressed}= this.state;
        return (     
          <div>
          <button className=" btn btn-primary mt-3" onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button> <button className=" btn btn-info mt-3 mx-3" onClick={() => this.resetGrid()}>
          Reset Grid
        </button>
            <div className="grid">
            {grid.map((row, rowIdx) => {
              return ( 

                <div key={rowIdx} className="gridRow">
                  {row.map((node, nodeIdx) => {
                     const {row, col, isFinish, isStart, isWall} = node; 
                    // console.log( node);
                     return (
                       <Node
                       key={nodeIdx} 
                       row={row}
                       col={col}
                       isFinish={isFinish}
                       isStart={isStart}
                       isWall={isWall}
                       mouseIsPressed={mouseIsPressed}
                       onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                       onMouseEnter={(row, col) => 
                        {return  this.handleMouseEnter(row, col)}}
                       onMouseUp={(row, col) => { return this.handleMouseUp(row,col)}}
                       ></Node>
                    );
                  })}
                </div>
              );
            })}
          </div>
          </div>
         );
    }
}
 // row= 60, col= 20  

 
const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 20; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  }; 

  
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
}; 

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];  
   let newNode= {};
   newNode = {
    ...node,
    isWall: !node.isWall, 
  }; 
 newGrid[row][col] = newNode; 
  return newGrid;
}; 


const changeStartPoint = (grid, row, col, previousStart=0, newStart=0) => {
  const newGrid = grid.slice();  
  const startNode = newGrid[START_NODE_ROW][START_NODE_COL];  
   let newNode= {};
   let previousNode= {};
  if(previousStart)  
  {
    previousNode = {
      ...startNode,
      isStart: false
    }; 
    newGrid[START_NODE_ROW][START_NODE_COL]=previousNode;
   }  
   
   if(newStart)  
   {
     newNode = {
       ...startNode,
       isStart: true
     }; 
     newGrid[START_NODE_ROW][START_NODE_COL]=newNode;
    }  

  return newGrid;
}; 


const changeEndPoint = (grid, row, col,  previousEnd=0,newEnd=0) => {
  const newGrid = grid.slice();  
  const endNode = newGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
   let newNode= {};
   let previousNode= {};
  
   if(previousEnd)  
  {
    previousNode = {
      ...endNode,
      isFinish: false
    }; 
    newGrid[FINISH_NODE_ROW][FINISH_NODE_COL]=previousNode;
   } 
   
    if(newEnd)  
  {
    newNode = {
      ...endNode,
      isFinish: true
    }; 
    newGrid[FINISH_NODE_ROW][FINISH_NODE_COL]=newNode;
   } 
  return newGrid;
};