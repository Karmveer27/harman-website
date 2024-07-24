import React, { useState, useRef } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './index.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success('Message successfully sent!');
                    form.current.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    toast.error('Failed to send the message, please try again');
                    console.error('Email send error:', error);
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <>
            <Form ref={form} onSubmit={sendEmail} className="contact-form-container">
                <Row>
                    <Col lg={6}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label className="text-left"><h4>First name</h4></Form.Label>
                            <Form.Control type="text" name="first_name" placeholder="Jane" required />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group controlId="formLastName">
                            <Form.Label className="text-left"><h4>Last name</h4></Form.Label>
                            <Form.Control type="text" name="last_name" placeholder="Smitherton" required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Form.Group controlId="formEmail">
                            <Form.Label className="text-left"><h4>Email address</h4></Form.Label>
                            <Form.Control type="email" name="email" placeholder="email@email.net" required />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group controlId="formSubject">
                            <Form.Label className="text-left"><h4>Subject</h4></Form.Label>
                            <Form.Control as="select" name="subject" defaultValue="General Enquiry" required>
                                <option>General Enquiry</option>
                                <option>Purchase</option>
                                <option>Sell</option>
                                <option>Appraisal</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formMessage">
                    <Form.Label className="text-left"><h4>Your Message</h4></Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your question or message" required />
                </Form.Group>
                <Button variant="dark" type="submit" className="mt-0 w-100" disabled={isSubmitting}>
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </>
    );
}

export default ContactForm;
