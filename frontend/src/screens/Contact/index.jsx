import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../Contact/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from "../../components/ContactForm";

function Contact() {
    const [contactImage, setContactImage] = useState('');

    useEffect(() => {
        const urlProxy = import.meta.env.API_URL_PROXY;
        fetch(urlProxy + 'api/contact-image/?populate=*')
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.data.attributes.Image.data.attributes.url;
                setContactImage(urlProxy + imageUrl);
            })
            .catch((error) => console.error('Error fetching Image:', error));
    }, []);

    return (
        <>
            <div className='py-3'>
                <Row className='py-5 d-flex align-items-center min-vh-100 '>
                    <Col lg={7} className="py-lg-5">
                        <h1 className='text-left'>Enquire</h1>
                        <span className='text-left pb-3 d-flex  align-items-center'>  
                            <i className="fas fa-phone px-2 "></i>
                            <h3> +64 22 375 1234</h3>
                        </span>
                        <ContactForm />
                    </Col>
                    <Col lg={5} className="py-5 d-flex justify-content-center align-items-center ">
                        <div className="c-image-container">
                            <img src={contactImage} alt="Enquire" className='img-fluid rounded' />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Contact;
