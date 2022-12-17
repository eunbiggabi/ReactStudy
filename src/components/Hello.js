import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';

const Hello = ({age}) => {

    const [name, setName] = useState('Mike');
    const [increaseAge, setIncreaseAge] = useState(age);
    
    function changeName() {
        const newName = name === 'Mike' ? 'Jane' : 'Mike';
        setName(newName)
    }

    function increaseAgeageValue() {
        setIncreaseAge(increaseAge + 1)
    }
    
    function showName() {
        console.log('Mike')
    }

    function showTexts(txt) {
        console.log(txt);
    }

    function showText(e) {
        console.log(e.target.value);
    }
    return (
    <div>
        <h1>Hello</h1>
        <h2>{name}({increaseAge})</h2>
        <Container>
            <Row>
                <Col><Button onClick={() => setName(name === 'Mike' ? 'Jane' : 'Mike')}>Show name</Button></Col>
                <Col><Button onClick={increaseAgeageValue}>Show age</Button></Col>
            </Row>
        </Container>
       
        
        
        <input type="text" onChange={showText}></input>
        <input type="text" onChange={(e) => console.log(e.target.value)}></input>
        <input type="text" onChange={(e) => {
            const txt = e.target.value
            showTexts(txt);
        }}></input>
    </div>
    );
}

export default Hello;