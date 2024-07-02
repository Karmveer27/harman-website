import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Row,Col} from "react-bootstrap"

function Hero() {
    return (
        <>
       

        <Row>
                <Col ld={6} sd={12}>
                            <h1 className="font-weight-bold pb-3">Have Any Questions?</h1>
                            <p className="text-muted text-left">
                                Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur sadipscing elitr
                            </p>
                </Col>
                <Col ld={6} sd={12}>
                    <img src="/suit.jpg" alt="Contact" className="img-fluid rounded" />
                </Col>

            </Row>
        </>
    );
}

export default Hero;
