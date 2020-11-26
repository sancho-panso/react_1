import './nav.scss';
import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import  {NavLink} from 'react-router-dom';

class Nav extends Component{

    render(){
        return(
            <Container>
                <nav className="navBar">
                    <ul>
                        <li><NavLink exact to="/">Pradinis</NavLink></li>
                        <li><NavLink to="/form">Forma</NavLink></li>
                    </ul>
                </nav>
            </Container>
        )
    }
}

 export default Nav;