import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../ContactForm/index.css"
function ContactForm(){
    return(
        <Form>
            <Row>

                <Col md={6}>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Jane" />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Smitherton" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="email@janesfakedomain.net" />
            </Form.Group>

            <Form.Group controlId="formMessage">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your question or message" />
            </Form.Group>

            <Button variant="dark" type="submit" className="mt-3 w-100">
                Submit
            </Button>

        </Form>
    )
}
export default ContactForm;