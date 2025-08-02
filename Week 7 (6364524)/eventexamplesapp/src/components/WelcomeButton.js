import React from 'react';

function WelcomeButton() {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>
  );
}

export default WelcomeButton;
