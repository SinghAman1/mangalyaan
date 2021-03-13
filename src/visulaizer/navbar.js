 import React, { Component } from 'react';
import Instructions from './instructions';
//import { dijkstra } from './algorithms/dijkstra';
 class Navbar extends Component {
   state = {  
     currentAlgorithm : null,  
     message : 'select Algorithm'
     } 
    

     selectAlgorithm= ( name )=>{ 
       this.setState({ message : 'Apply'+ ' ' +name });  
       this.setState({  currentAlgorithm :name });   
        // console.log( this.props); v 
        document.getElementById('input-message').innerHTML= ` Apply ${ name} Algorithm`;
        // document.getElementById('algo-name').innerHTML= `  ${ name} Algorithm`;
      
       
     }
   render() {  
      
     return (  
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-light navColor">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Mangalyaan</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
    <li className="nav-item dropdown ms-0">
        <a className="nav-link dropdown-toggle " href="#" id="InstructionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Instructions
        </a>
        <ul className="dropdown-menu" aria-labelledby="InstructionDropdown">
          <li><a className="dropdown-item" >Click within the grid and drag your mouse to draw obstacles represented by  
                      <span class="node-wall design-node" ></span></a></li>
          <li><a className="dropdown-item" >Drag the <span class="node-start design-node"></span> Start node to set the start position</a></li>
          <li><a className="dropdown-item">Drag the <span class="node-finish  design-node"></span> End node to set the end position</a></li>
          <li><a className="dropdown-item">Click and press the 'W' key on your keyboard and drag your mouse to add <span
                        class="node-weighted  design-node"
                      ></span> Weights for weighted algorithms.</a></li>
           <li><a className="dropdown-item">Choose an algorithm from the  Navbar.</a></li>
           <li><a className="dropdown-item">Click Start button in the upper right corner of the side bar to start the visualization.</a></li>
           <li><a className="dropdown-item">The <span class="node-visited  design-node"></span> Visited nodes will be highlighted along the <span
                        class="node-shortest-path  design-node"
                      ></span> Shortest path</a></li>
           
        </ul>
      
      </li>
      <li className="nav-item dropdown ms-0">
        <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select Algorithms
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" id='startButtonDijkstra'   onClick={() =>this.selectAlgorithm( 'dijkstra')} href="#">Dijkstra</a></li>
          <li><a className="dropdown-item" id='startButtonBFS'  onClick={() =>this.selectAlgorithm( 'BFS')} href="#">Breath First Search</a></li>
          <li><a className="dropdown-item" id='startButtonAStar'  onClick={() =>this.selectAlgorithm( 'A*')} href="#">A*</a></li>
          <li><a className="dropdown-item" id='startButtonGreedy'  onClick={() =>this.selectAlgorithm( 'Greedy-best-first')}  href="#">Greedy Best First Search</a></li>
        </ul>
      
      </li>
     
      <li className="nav-item mx-3">
         <div className="form-check form-switch mt-2">
           <input className="form-check-input" type="checkbox" value="" id="diagonal-flag"></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
             Allow Diagonal
            </label>
           </div>
      </li>  
      <li className="nav-item mx-3">
      <button className="btn btn-outline-info rounded-pill py-1 px-4 mt-1" onClick={ this.props.resetGrid}> Reset Grid</button>
      </li> 
      <li className="nav-item mx-3">
      <button className="btn btn-outline-info rounded-pill  py-1 px-4 mt-1" onClick={ this.props.clearPath}> Clear Path and Weights</button>
      </li> 

      
      
    </ul>
   
    
    {/* <form className="d-flex"> */}
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <button className="btn btn-outline-success rounded-pill px-5 "  id="actualStartButton" onClick={ ()=> this.props.visualizeAlgorithm(this.state.currentAlgorithm)}>{ this.state.message}</button>
  {/* <Instructions/> */}
  </div>
</div>
</nav> 
</div> 

      );
   }
 }
  
 export default Navbar;
 
 
 
 
