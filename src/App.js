import './App.css';
import Button from './components/Button';
import Candle from './components/Candle';
import Cube from './components/Cube';
import Soci from './components/Soci';


function App() {
  return (
    <div className="App">
      <Candle/>
      <br />
     <Soci/>
     <br />
      <Button/>
      <br />
      <Cube/>
      <Candle/>
      <br />
    </div>
  );
}

export default App;
