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
            <Container fluid>
                <Navbar.Brand href="#home" className="ms-3">Harman Singh</Navbar.Brand>
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
                            href="#latest-work"
                            className={activeLink === '#latest-work' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#latest-work')}
                        >
                            Our Latest Work
                        </Nav.Link>
                        <Nav.Link
                            href="#testimonials"
                            className={activeLink === '#testimonials' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#testimonials')}
                        >
                            Testimonials
                        </Nav.Link>
                        <Nav.Link
                            href="#properties"
                            className={activeLink === '#properties' ? 'active' : ''}
                            onClick={() => handleSetActiveLink('#properties')}
                        >
                            Properties
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto me-3">
                        <Nav.Link
                            href="#contact"
                            className="nav-link-no-underline"
                            onClick={() => handleSetActiveLink('#')}
                        >
                            <button className="btn btn-warning btn-md">Contact us</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
