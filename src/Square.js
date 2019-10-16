import React from 'react';

function Square(props) {
    return (
      <button 
          className={ 'square ' + getColor(props.value)}
          onClick={props.onClick}
          disabled={props.value !== null}
        >
          {props.value}
      </button>
    )
  }

  function getColor(value) {
    if (value === 'X') {
      return 'square--red';
    }
    if (value === '0') {
      return 'square--green';
    } 
    return;
  }

export default Square;