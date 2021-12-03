import React from 'react';

const person = (props) => {
  // return React.createElement('p', null, 'I am {props.name}, and I am {props.age} years old');
  return (
    <div>
      <p onClick={props.switchName}>I am {props.name}, and I am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;