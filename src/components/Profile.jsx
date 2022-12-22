import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from './Avata';


export default function Profile ({image, name, title, isNew}) {


    return (
        <Container className='profile'>
            <Avatar image={image} isNew={isNew} />
            <h1>{name}</h1>
            <p>{title}</p>
        </Container>
    );
}