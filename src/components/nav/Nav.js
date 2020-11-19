import './nav.scss';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Nav() { 
    return(
    <nav>
    <Navbar className="bg-light justify-content-between" md={{ span: 4, offset: 8 }}>
    <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit" variant="primary">Search</Button>
    </Form>
    </Navbar>
    </nav>
    )
 }

 export default Nav;