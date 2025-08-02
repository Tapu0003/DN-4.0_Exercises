import logo from './logo.svg';
import './App.css';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';
function App() {
  const flag=true;
  return (
    <div className="App">
  
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
