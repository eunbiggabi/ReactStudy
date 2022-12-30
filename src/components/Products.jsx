
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Button, Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Products() {

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);

    function handleChange() {
      setChecked(prev => !prev);
    }

    useEffect(() => {
      fetch(`data/${checked ? 'sale_':''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('뜨근한 데이터를 네트워크에서 받아옴');
        setProducts(data)
      })
      return () => {
        console.log('깨끗하게 청소하는 일들을 합니다.')
      }
    }, [checked])

    // function handleCount() {
    //   setCount(prev => prev + 1);
    //   onClick();
    // }

  return (
    <Container>
      <input type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>show only hot sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
        
      </ul>
      <Button onClick={() => {
        setCount(prev => prev + 1);
      }}>{count}</Button>
    </Container>
  );
}

export default Products;