import './index.css';
import React, { Component } from "react";

class App extends Component{
  state={
    Text : ""
  }
  handleAdd = async e =>{
await this.setState({
  text : e.target.value
})
  
  }

 handleSubmit = e => {
console.log(this.state.text);
 }
render()

{
return (

  <div className="App-header">
      <input 
      onChange={this.handleAdd}
       className="form-control" 
      //  value={this.state.text}
        type="text" id="text" placeholder="enter some text"/>
      <br />
      <button 
       onClick={this.handleSubmit}
      className="btn btn-success" id="submit">save </button>
    </div>

);

}

}



export default App;
