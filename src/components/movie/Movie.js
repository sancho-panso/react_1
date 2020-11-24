import'./movie.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
/*function Movie(props) {
    return(
        <div className = "col-sm-6">
            <div className = "card">
                <div className = "card-body">
                    <h5 className = "card-title">Pavadinimas: {props.name}</h5> 
                    <p className = "card-text">Metai: {props.note}</p>
                    <p className = "card-text">Plot: {props.plot}</p>
                    <a href="#" className ="btn btn-primary">Plačiau</a>   
                </div>
            </div>
        </div>
    )
}*/
function Movie(props) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body className="">
            <Row className="justify-content-md-center">   
                <Card.Title >
                    Pavadinimas: {props.name}
                </Card.Title>
            </Row>
            <Row className="justify-content-md-center">
                <Col >
                    <Card.Img src={props.link}/>   
                </Col>
            </Row>
            <Row className="justify-content-md-center">   
                <Card.Text>
                    Metai: {props.note}
                </Card.Text>
            </Row>
            <Row className="justify-content-md-center">   
                <Card.Text>
                Plot: {props.plot}
                </Card.Text>
            </Row>
            <Row className="cardBottom">
                <Col md={{ span: 3, offset: 1 }}>
                    <Button variant="btn btn-primary">Plačiau</Button>
                </Col>
            </Row>
        </Card.Body> 
        </Card>
    )
}



export default Movie;