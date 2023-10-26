import logo from './logo.svg';
import './App.css';

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

function X(){
  return <p>rip xxxtentacion</p>
}

function App() {
  return (
    <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello React!</p>
              <Car /><X/></div>
    
  );
}

export default App;
