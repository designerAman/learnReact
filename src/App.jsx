import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Aman', age: 23 },
      { name: 'Aakash', age: 22 },
      { name: 'Ankush', age: 18 },
    ],
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Aman Gupta', age: 23 },
        { name: 'Aakash Tripathi', age: 21 },
        { name: 'Ankush Gupta', age: 18 },
      ],
    });
  }  

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} switchName = {this.switchNameHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} switchName = {this.switchNameHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} switchName = {this.switchNameHandler}>My hobby is playing BGMI</Person>
      </div>
    );
  }
}

export default App;
