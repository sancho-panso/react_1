import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

function Nav() { 
    return(
    <nav>
        <Container>
        <Navbar className="bg-light justify-content-between" md={{ span: 4, offset: 8 }}>
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit" variant="primary"><FontAwesomeIcon icon="search"/></Button>
            </Form>
        </Navbar>
        </Container>

    </nav>
    )
 }

 export default Nav;