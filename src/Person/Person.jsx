import React from 'react';

import './Person.css';

const person = (props) => {
  // return React.createElement('p', null, 'I am {props.name}, and I am {props.age} years old');
  return (
    <div className="Person">
      <p
        onClick={props.switchName}
        onClick={props.deletePerson}>I am {props.name}, and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name}/>
    </div>
  )
}

export default person;