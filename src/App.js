import React, { Component } from 'react';
import Start from './start';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ricardo', age: '24', belt: 'yellow', id:'1'},
      {name: 'Juan', age: '33', belt: 'brown', id:'2'},
      {name: 'Gonzalo', age: '32', belt: 'green', id:'3'}
    ]
  }
  render() {
    return (
     <div className="App container">
       <div className="col-lg-12">
          <h1>My frist app</h1>
          <p>Welcome :D</p>

          <Start ninjas = {this.state.ninjas} />
          <AddNinja />         
       </div>
     </div> 
    )
  }
}

export default App;
