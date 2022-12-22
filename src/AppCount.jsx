import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import Count from './components/Count';


function AppCount({addCount}) {

 const [count, setCount] = useState(0)

    function handleClick() {
        setCount(prev => prev + 1)
    }

  return (
    <Container>
        <h1>Total Count: {count} {count > 10 ? "fire" : "ice"}</h1>
      <Count total={count} onClick={handleClick}/>
      <Count total={count} onClick={handleClick}/>
      <Count total={count} onClick={handleClick}/>
    </Container>
  );
}

export default AppCount;
