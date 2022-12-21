import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function AppJSX() {

  const list = ["str", "water", "carrot"]

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default AppJSX;
