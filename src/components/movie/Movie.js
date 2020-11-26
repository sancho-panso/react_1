import'./movie.scss'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Movie(props) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body className="">
            <Row className="justify-content-md-center">   
                <Card.Title >
                    Title: {props.name}
                </Card.Title>
            </Row>
            <Row className="justify-content-md-center">
                <Col >
                    <Card.Img src={props.link}/>   
                </Col>
            </Row>
            <Row className="justify-content-md-center">   
                <Card.Text>
                    Year: {props.note}
                </Card.Text>
            </Row>
            <Row className="justify-content-md-center">   
                <Card.Text>
                Plot: {props.plot}
                </Card.Text>
            </Row>
            <Row className="cardBottom">
                <Col md={{ span: 3, offset: 1 }}>
                    <Button variant="btn btn-primary">More..</Button>
                </Col>
            </Row>
        </Card.Body> 
        </Card>
    )
}



export default Movie;