
import './index.css';
import React from "react";
import {BrowserRouter, Switch ,Route, NavLink  }from "react-router-dom";

import Home from "./Home";
import login from "./Login";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div className="header">
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/login">Login <small>Access without token only </small></NavLink>
      <NavLink activeClassName="active" to="/dashboard" >Dashboard <small>Access without token only </small></NavLink>
      </div>  
      <div className="content">
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/login" component={login}/> 
       <Route exact path="/dashboard" component={Dashboard}/>  
    </Switch>  
      </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
