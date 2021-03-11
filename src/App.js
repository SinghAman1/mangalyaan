// import logo from './logo.svg';
import './App.css'; 
import './background.css';
import Navbar from './navbar';
import Visualizer from './visulaizer/visualizer';

function App() {
  return (
    <div className="App">  
     <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
   
      <Visualizer/>
    </div>
  );
}

export default App;
