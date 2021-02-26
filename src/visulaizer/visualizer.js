import React, { Component } from 'react';
import Node from '../node/node'; 
import "./visualizer.css";
export default class Visualizer extends Component {
    state = {  
        grid: [],
      mouseIsPressed: false,
     } 
Node
     componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
      }

    render() {  
        const {grid}= this.state;
        return (   
            <div className="grid">
            {grid.map((row, rowIdx) => {
              return (
                <div key={rowIdx} className="gridRow">
                  {row.map((node, nodeIdx) => {
                    // const {row, col, isFinish, isStart, isWall} = node;
                    return ( 
                      
                      <Node
                        key={nodeIdx}
                        ></Node>
                    );
                  })}
                </div>
              );
            })}
          </div>

         );
    }
}
 
 
const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 60; row++) {
      const currentRow = [];
      for (let col = 0; col < 20; col++) {
        currentRow.push([]);
      }
      grid.push(currentRow);
    }
    return grid;
  };