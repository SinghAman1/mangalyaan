import React, { Component } from 'react';  

import "./node.css"; 

class Node extends Component {
    state = {  
       
     }
    render() {  
        const {
            col,
            isFinish,
            isStart,
            isWall,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            row,
          } = this.props;
          const extraClassName = isFinish ? 'node-finish' : 
           isStart ? 'node-start' : 
            isWall ? 'node-wall' : '';
    
        return (
          <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp(row, col)}></div>
        );
    }
} 
 
export default Node;