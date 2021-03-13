import React, { Component } from 'react';
import './visualizer.css';
import Collapse from 'react-bootstrap/Collapse';

 class Instructions  extends Component {
    state = {  }
    render() { 
        return (  <div
          class="info-bar"
          id="info-bar"
        >
          <div class="card">
            <div class="card-header">
              <a
                id="info-header"
                href="#"
              >
                Instructions
              </a>
              <a
                data-toggle="collapse"
                href="#collapse"
              >
                <div
                  id="info-icon"
                  class="fa fa-chevron-up rotate"
                ></div>
              </a>
            </div>
            {/* <div
              id="collapse"
              class="collapse show"
              data-parent="#info-bar"
            > */}
            {/* < Collapse> */}
              <div class="card-body">
                <div
                  id="info-description"
                  class="info-description"
                >
                  <ul>
                    <li>Click within the grid and drag your mouse to draw obstacles represented by <span
                        class="node-wall"
                      > . . .</span> </li>
                    <li>Drag the <span class="node-start">. . . </span> Start node to set the start position</li>
                    <li>Drag the <span class="node-finish">. . .</span> End node to set the end position</li>
                    <li>Click and press the 'W' key on your keyboard and drag your mouse to add <span
                        class="node-weighted"
                      >. . .</span> Weights for weighted algorithms.
                    </li>
                    <li>Choose an algorithm from the  Navbar.</li>
                    <li>Click Start button in the upper right corner of the side bar to start the visualization.</li>
                    <li>The <span class="node-visited">. . .</span> Visited nodes will be highlighted along the <span
                        class="node-shortest-path"
                      >. . . </span> Shortest path.</li>
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