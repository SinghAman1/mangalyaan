import React, { Component } from 'react';
import './visualizer.css';
import '../node/node.css';
// import Collapse from 'react-bootstrap/Collapse';

 class Instructions  extends Component {
    state = {  } 

    handleclick =()=>{
       document.getElementById('hide-instruct').classList.toggle("hide-card");
       if( document.getElementById("btn-instruct").innerHTML=== "open")
       {
        document.getElementById("btn-instruct").innerHTML= "close";
       }
       else 
       {
        document.getElementById("btn-instruct").innerHTML= "open";
       }
    }
    render() { 
        return (  <div
          class="info-bar"
          id="info-bar"
        >
          <div class="card ">
            <div class="card-header">
              <a
                id="info-header"
                href="#"
              >
                Instructions
              </a>
               
              <button 
              className="btn btn-outline-primary py-0 rounded-pill"  
              onClick= { this.handleclick} 
              id ="btn-instruct"
              >close</button>
            </div>
            {/* <div
              id="collapse"
              class="collapse show"
              data-parent="#info-bar"
            > */}
            {/* < Collapse> */}
              <div class="card-body" id="hide-instruct">
                <div
                  id="info-description"
                  class="info-description"
                >
                  <ul>
                    <li>Click within the grid and drag your mouse to draw obstacles represented by  
                      <span class="node-wall design-node" ></span> </li>
                    <li>Drag the <span class="node-start design-node"></span> Start node to set the start position</li>
                    <li>Drag the <span class="node-finish  design-node"></span> End node to set the end position</li>
                    <li>Click and press the 'W' key on your keyboard and drag your mouse to add <span
                        class="node-weighted  design-node"
                      ></span> Weights for weighted algorithms.
                    </li>
                    <li>Choose an algorithm from the  Navbar.</li>
                    <li>Click Start button in the upper right corner of the side bar to start the visualization.</li>
                    <li>The <span class="node-visited  design-node"></span> Visited nodes will be highlighted along the <span
                        class="node-shortest-path  design-node"
                      ></span> Shortest path.</li>
                  </ul>
                </div>
              </div>
          
            {/* </Collapse> */}
          </div>
        </div>
        
        );
    }
}
 
export default Instructions ;