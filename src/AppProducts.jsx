import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import Products from './components/Products';


function AppProducts() {
  const [count, setCount] = useState(0);
  const [showProduct, setShowProduct] = useState(true);

  return (
    <Container>
        {showProduct && <Products/>}
        <button onClick={() => setShowProduct(!showProduct)}>show products</button>
    </Container>
  );
}

export default  AppProducts;
