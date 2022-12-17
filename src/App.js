import './App.css';
import React, {useState, useEffect} from 'react';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [name, setName] = useState('Chloe');

  return (
    <div className="App">
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
      <Welcome />
      <h2>test</h2>
      <button onClick={() => setName('Lucas')}>click me</button>
      <p>{name}</p>
    </div>
  );
}

export default App;
