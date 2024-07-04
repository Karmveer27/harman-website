import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../Contact/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import ContactForm from "../../components/ContactForm";

function Contact() {
    return (
        <>
        <div className='py-3'>
            <Row className='py-5'>
                <Col lg={5} className="py-5 d-flex justify-content-center align-items-center">
                    <div className="image-container">
                        <img src="suit1.jpg" alt="Enquire" className='img-fluid rounded' />
                    </div>
                </Col>
                <Col lg={7} className="py-lg-5">
                    <h1 className='text-left'>Enquire</h1>
                    <span className='text-left pb-3 d-flex  align-items-center'>  
                        <i className="fas fa-phone px-2 "></i>
                        <h3> 999-999-9999</h3>
                    </span>

                    <ContactForm />
                </Col>
            </Row>
        </div>
        </>
    );
}

export default Contact;
