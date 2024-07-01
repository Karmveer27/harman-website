import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

function Header() {
    const [activeLink, setActiveLink] = useState('#about');

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="#home" className="me-auto">Harman Singh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link
                            href="#about"
                            className={activeLink === '#about' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#about')}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            href="#sell"
                            className={activeLink === '#sell' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#sell')}
                        >
                            Sell
                        </Nav.Link>
                        <Nav.Link
                            href="#buy"
                            className={activeLink === '#buy' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#buy')}
                        >
                            Buy
                        </Nav.Link>
                        <Nav.Link
                            href="#rent"
                            className={activeLink === '#rent' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#rent')}
                        >
                            Rent
                        </Nav.Link>
                        <Nav.Link
                            href="#latest"
                            className={activeLink === '#latest' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#latest')}
                        >
                            Latest Work
                        </Nav.Link>
                        <Nav.Link
                            href="#testimonials"
                            className={activeLink === '#testimonials' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#testimonials')}
                        >
                            Testimonials
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
