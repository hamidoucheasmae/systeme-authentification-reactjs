
// import './App.css';
import React from "react";
import {browserRouter, Switch ,Route, NavLink  }from "react-router-dom";



function App() {
  return (
    <div className="App">
      <browserRouter>
       <div className="hedear">
      <NavLink>Home</NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      </div>  
      <div className="content">
      
      </div> 
      </browserRouter>
    </div>
  );
}

export default App;
