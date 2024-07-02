import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Row,Col} from "react-bootstrap"

function Hero() {
    return (
        <>
       

        <Row>
                <Col lg={6} md={12} className="pb-3">
                            <h1 className="font-weight-bold pb-3">Have Any Questions?</h1>
                            <p className="text-muted text-left">
                                Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur sadipscing elitr
                            </p>
                            <div className="d-flex justify-content-start ">
                                <button className="btn btn-warning btn-lg">Contact us</button>
                            </div>
                </Col>
                <Col lg={6} md={12}>
                    <img src="/suit.jpg" alt="Contact" className="img-fluid rounded" />
                </Col>

            </Row>
        </>
    );
}

export default Hero;
