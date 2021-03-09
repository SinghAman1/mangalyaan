//import Visualizer from './visulaizer/visualizer';
import './visualizer';
var algoId;
const Navbar = (props) => {
  
  return (  
   
      <div>
        algoId,
      <nav className="navbar navbar-expand-lg navbar-light navColor">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Mangalyaan</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
    
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select Algorithms
        </a>
        <ul  id="accordion" className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a id="dijkstra" className="dropdown-item" href="#" onClick={()=>{
            algoId="dijkstra";
          
          }
        }>Dijkstra</a></li>
          <li><a id="bfs" className="dropdown-item" href="#" onClick={()=>{
            algoId="bfs";
          
          }}>Bfs</a></li>
          <li><a id="astar"className="dropdown-item" href="#" onClick={()=>{
            algoId="astar";
          
          }}>A*</a></li>
          <li><a id="greedybfs" className="dropdown-item" href="#" onClick={()=>{
            algoId="grredybfs";
          
          }}>Greedy Best First Search</a></li>
        </ul>
      </li>
      <li className="nav-item mx-2">
         <div className="form-check form-switch mt-2">
           <input className="form-check-input" type="checkbox" value="" id="diagonal-flag"></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
             Allow Diagonal
            </label>
           </div>
      </li>  
      <li className="nav-item mx-2">
      <button id="reset" className="btn btn-outline-info rounded-pill py-0 mt-2"  onClick={() =>props.resetGrid()} type="submit"> reset Grid</button>
      </li> 
      <li className="nav-item mx-2">
      <button  id="clear" className="btn btn-outline-info rounded-pill py-0 mt-2" onClick={() =>props.clearPath()} type="submit"> Clear Path</button>
      </li> 
      
      
    </ul>
   
    
    <form className="d-flex">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <button className="btn btn-outline-success rounded-pill" type="submit">Apply Algorithm</button>
    </form>
  </div>
</div>
</nav> 
</div> 
   );
}

export default Navbar;