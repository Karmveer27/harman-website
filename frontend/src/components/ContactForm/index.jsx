import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./index.css";  

function ContactForm() {
    return (
        <Form>
            <Row>
                <Col lg={6}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label className="text-left"><h4>First name</h4></Form.Label>
                        <Form.Control type="text" placeholder="Jane" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group controlId="formLastName">
                        <Form.Label className="text-left"><h4>Last name</h4></Form.Label>
                        <Form.Control type="text" placeholder="Smitherton" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Form.Group controlId="formEmail">
                        <Form.Label className="text-left"><h4>Email address</h4></Form.Label>
                        <Form.Control type="email" placeholder="email@email.net" />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group controlId="formSubject">
                    <Form.Label className="text-left"><h4>Subject</h4></Form.Label>
                        <Form.Control as="select" defaultValue="General Enquiry">
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
                <Form.Control as="textarea" rows={3} placeholder="Enter your question or message" />
            </Form.Group>
            <Button variant="dark" type="submit" className="mt-3 w-100">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;
