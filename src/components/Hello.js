import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import GetAPI from "./GetAPI";

const Hello = ({url}) => {
    const [data, setData] = useState([]);
    const meals = GetAPI("https://www.themealdb.com/api/json/v1/1/random.php")
    console.log(meals);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    return (
    <div>
       
        <Container>
        <h1>This is what you going to cook today</h1>
            <Row>
                <Button variant="secondary" size="lg">Click Me</Button>
            </Row>
        </Container>
        
    </div>
    );
}

export default Hello;