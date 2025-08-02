import React from 'react';

function SyntheticEventExample() {
  const handleClick = (event) => {
    alert("I was clicked");
    console.log("SyntheticEvent:", event);
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default SyntheticEventExample;
