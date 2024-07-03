import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../Contact/index.css"

import ContactForm from "../../components/ContactForm"

function Contact() {
    return (
        <Container className="contact-form-container py-5">
            <Row className="py-5 ">
                <Col lg={6} >
                    <h1>Enquire Now</h1>
                    <ContactForm />
                </Col>

                <Col lg={6}>
                    <img src="suit1.jpg" />
                </Col>

            </Row>
           
        </Container>
    );
}

export default Contact;
