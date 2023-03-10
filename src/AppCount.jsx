import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import Count from './components/Count';


function AppCount() {
  const [count, setCount] = useState(0);

  return (
    <Container>
        <h1>{count}: {count > 10 ? 'Fire' : 'Cold'}</h1>
        <Count onClick={() => setCount(prev => prev + 1)} total={count}/>
        <Count onClick={() => setCount(prev => prev + 1)} total={count}/>
    </Container>
  );
}

export default AppCount;
