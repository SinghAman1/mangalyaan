// import React, { Component } from 'react';
const Navbar = (props) => { 
  //  console.log( props);
    return (  
        <div>
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
            Algorithms
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">dijectra</a></li>
            <li><a className="dropdown-item" href="#">bfs</a></li>
            <li><a className="dropdown-item" href="#">A*</a></li>
            <li><a className="dropdown-item" href="#">greedy bfs</a></li>
          </ul>
        </li>
 
 
        <li className="nav-item">
        <button className="btn btn-outline-info  my-auto" onClick={props.clearPath} >clearPath</button>
        </li> 

        <li className="nav-item mx-2"> 
        <div className="form-check form-switch mt-1 py-2">
         <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Allow Diagonal</label>
        </div>
        </li>
      </ul> 

      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-success" >apply Algorithm</button>
      </form>
    </div>
  </div>
</nav> 
</div> 
     );
}
 
export default Navbar;