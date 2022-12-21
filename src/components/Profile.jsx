import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Profile ({image, name, title, isNew}) {


    return (
        <Container className='profile'>
            <img src={image} />
            {isNew && <span>new</span>}
            <h1>{name}</h1>
            <p>{title}</p>
        </Container>
    );
}