import React from "react"
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/Home"
import LandingPage from "./components/LandingPage";
import Create from "./components/Create";
import Detail from "./components/Detail";
function App() {
  return (
    <div className="App">
    
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/videogame/:id" component={Detail} />
      
      

      
    </div>
  );
}

export default App;
