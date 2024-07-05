import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';

function Header() {
    const [activeLink, setActiveLink] = useState('#about');

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="ms-3">Harman Singh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/#about" onClick={() => handleSetActiveLink('#about')}>
                            About Us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#work" onClick={() => handleSetActiveLink('#work')}>
                            Our Latest Work
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#testimonials" onClick={() => handleSetActiveLink('#testimonials')}>
                            Testimonials
                        </Nav.Link>
                        <Nav.Link as={Link} to="/properties" onClick={() => handleSetActiveLink('#properties')}>
                            Properties
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto me-3">
                        <Nav.Link as={Link} to="/contact" className="nav-link-no-underline" onClick={() => handleSetActiveLink('#')}>
                            <button className="btn btn-warning btn-md">Contact us</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
