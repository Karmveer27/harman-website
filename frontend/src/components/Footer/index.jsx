import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

function Footer(){
    return(
    <Navbar expand="lg" className="bg-body-tertiary sticky-bottom">
        <Container>
            <h2>Footer</h2>
            
        </Container>
    </Navbar>
    )
}

export default Footer;