import React from 'react';
import Counter from './components/Counter';
import SyntheticEventExample from './components/SyntheticEventExample';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div style={{ marginLeft: '20px', marginTop: '20px' }}>
      <Counter />
      <SyntheticEventExample />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

