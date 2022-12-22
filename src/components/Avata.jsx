import {Container} from 'react-bootstrap';



export default function Avatar ({image, isNew}) {


    return (
        <Container className='avata'>
            <img src={image} />
            {isNew && <span>new</span>}
        </Container>
    );
}