import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

function Footer(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary fixed-bottom">
        <Container>
            <p>Harman</p>
            
        </Container>
    </Navbar>
    )
}

export default Footer;