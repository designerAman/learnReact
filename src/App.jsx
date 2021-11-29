import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Aman', age: 23},
      {name: 'Aakash', age: 22},
      {name: 'Ankush', age: 18},
    ]
  }

  switchNameHandler() {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobby is playing BGMI</Person>
      </div>
    );
  }
}

export default App;
