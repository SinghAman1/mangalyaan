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
            isvisited,
            onMouseDown,
            onMouseEnter,
            onMouseUp, 
            weight,
            row,
            parent,f,g,h
          } = this.props;
          const extraClassName = isFinish ? 'node-finish' : 
           isStart ? 'node-start' : 
            isWall ? 'node-wall' : '';
            // console.log( this.props);
        return (  
          <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseUp={() => onMouseUp(row, col)} 
            // onKeyDown={ ()=> onKeyDown()} 
            ></div>
        );
    }
} 
 
export default Node;