import React, { Component } from 'react';
import './visualizer.css'
 class Instructions  extends Component {
    state = {  }
    render() { 
        return (  <div
            class="info-bar "
            id="info-bar"
          >
            <div class="card draggable-element">
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
              <div
                id="collapse"
                class="collapse show"
                data-parent="#info-bar"
              >
                <div class="card-body draggable-element">
                  <div
                    id="info-description"
                    class="info-description"
                  >
                    <ul>
                      <li>Click within the grid and drag your mouse to draw obstacles represented by <span
                          class="color-code wall"
                        ></span> invisible highlight.</li>
                      <li>Drag the <span class="color-code start">. . .</span> Start node to set the start position</li>
                      <li>Drag the <span class="color-code end">. . .</span> End node to set the end position</li>
                      <li>Click and press the 'W' key on your keyboard and drag your mouse to add <span
                          class="color-code unvisited-weight"
                        >. . .</span> Weights for weighted algorithms.
                      </li>
                      <li>Choose an algorithm from the right hand side bar.</li>
                      <li>Click Start button in the lower right corner of the side bar to start the visualization.</li>
                      <li>The <span class="color-code visited">. . .</span> Visted nodes will be highlighted along the <span
                          class="color-code shortest"
                        >. . .</span> Shortest path.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Instructions ;