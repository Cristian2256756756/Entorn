// MyButton.js
import React from 'react';

function MyButton() {
    function handleClick(){
        alert('¡Me hiciste clic!');
            }
 return (
    <button onClick={handleClick}>
    Hazme clic para poder descargar mi CV
  </button>
);
}

export default MyButton;
