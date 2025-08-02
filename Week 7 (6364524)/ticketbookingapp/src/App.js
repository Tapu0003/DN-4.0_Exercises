import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1 className='container' >Welcome back</h1>;
  }
  return <h1 className='container'>Please sign up.</h1>;
}

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
