
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';

function Count({total, onClick}) {

    const [count, setCount] = useState(0);

    // function handleCount() {
    //   setCount(prev => prev + 1);
    //   onClick();
    // }

  return (
    <Container>
      <h2>{count} / {total}</h2>
      <Button onClick={() => {
        setCount(prev => prev + 1);
        onClick();
      }}>+</Button>
    </Container>
  );
}

export default Count;