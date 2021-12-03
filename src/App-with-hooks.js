import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Aman11', age: 23 },
      { name: 'Aakash', age: 22 },
      { name: 'Ankush', age: 18 },
    ],
  });

  // state = {
  //   persons: [
  //     { name: 'Aman11', age: 23 },
  //     { name: 'Aakash', age: 22 },
  //     { name: 'Ankush', age: 18 },
  //   ],
  // }

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Aman Gupta', age: 23 },
        { name: 'Aakash Tripathi', age: 21 },
        { name: 'Ankush Gupta', age: 18 },
      ],
    });
  }

  return (
    <div className="App">
      <h1>This is a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobby is playing BGMI</Person>
    </div>
  );
}

export default app;
