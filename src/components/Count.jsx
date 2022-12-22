
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';

function Count() {

 const [count, setCount] = useState(0);

    function addCount() {
        setCount(prev => prev + 1);
    }

  return (
    <Container>
      <h2>{count}</h2>
      <Button onClick={addCount}>+</Button>
    </Container>
  );
}

export default Count;