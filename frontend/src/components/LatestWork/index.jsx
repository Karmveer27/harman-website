import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Row, Col, Carousel } from "react-bootstrap";
import WorkCard from "./WorkCard";

function LatestWork() {
    return (
        <>
             <h1>Our Latest Work</h1>
            <Row className='d-none d-lg-flex'>
                <Col lg={4}  className="">
                    <WorkCard imgSrc={"suit.jpg"}/>
                </Col>
                <Col lg={4} className="">
                    <WorkCard imgSrc={"suit1.jpg"}/>
                </Col>
                <Col lg={4} className="">
                    <WorkCard  imgSrc={"suit2.jpg"}/>
                </Col>
            </Row>

            <Row className="d-flex d-lg-none">
                <Col>
                    <Carousel id="carouselExampleInterval">
                        <Carousel.Item interval={2000} className="carousel-item">
                            <WorkCard imgSrc={"suit.jpg"} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000} className="carousel-item">
                            <WorkCard imgSrc={"suit1.jpg"} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}  className="carousel-item">
                            <WorkCard imgSrc={"suit2.jpg"}/>
                        </Carousel.Item>
                    </Carousel>     
                </Col>
            </Row>
        </>
    );
}

export default LatestWork;
