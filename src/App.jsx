import React, { Component } from 'react';
import Radium from 'radium';

import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Aman', age: 23 },
      { id: 2, name: 'Aakash', age: 22 },
      { id: 3, name: 'Ankush', age: 18 },
    ],
    otherState: 'some other value',
    showPersons: true,
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 23 },
        { name: 'Aakash', age: 22 },
        { name: 'Ankush', age: 18 },
      ]
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons;  This is not a better approach
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                deletePerson={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                changeName={(event) => { this.changeNameHandler(event, person.id) }} />
            })
          }

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            switchName={this.switchNameHandler.bind(this, 'Aman Gupta')}
            changeName={this.changeNameHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>My hobby is playing BGMI</Person> */}
        </div>
      );

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    const classes = [];
    if (this.state.persons.length < 3) {
      classes.push('red');
    }

    if (this.state.persons.length < 2) {
      classes.push('bold')
    }


    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button onClick={() => this.switchNameHandler('Aman Gupta 2601')}>Switch Name</button> */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
