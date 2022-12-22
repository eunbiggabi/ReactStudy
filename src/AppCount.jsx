import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import Count from './components/Count';


function AppCount() {

 const [count, setCount] = useState(0);

    function addCount() {
        setCount(prev => prev + 1);
    }

  return (
    <Container>
      <Count />
      <Count />
      <Count />
    </Container>
  );
}

export default AppCount;
