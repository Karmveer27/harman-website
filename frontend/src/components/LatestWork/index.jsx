import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Row, Col, Carousel } from "react-bootstrap";
import WorkCard from "./WorkCard";

function LatestWork() {

    const tempData = {
       "h1" : {
           "src" : "suit1.jpg",
           "description" : "Great first house, come have a look!"
       },
       "h2" : {
           "src" : "suit2.jpg",
           "description" : "Dont miss out on this amazing oppurtunity!"
       },
       "h3" : {
           "src" : "suit.jpg",
           "description" : "Great first house, come have a look!"
       }
    }
    return (
        <>
             <h1>Our Latest Work</h1>
            <Row className='d-none d-lg-flex justify-content-center'>
                <div className="latest-work-container">
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <WorkCard imgSrc={tempData.h1.src} description={tempData.h1.description} />
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <WorkCard imgSrc={tempData.h2.src} description={tempData.h2.description}/>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <WorkCard imgSrc={tempData.h3.src} description={tempData.h3.description}/>
                    </Col> 
                </div>
            </Row>
        
          

            <Row className="d-flex d-lg-none">
                <Col>
                    <Carousel id="carouselExampleInterval">
                        <Carousel.Item interval={2000} className="carousel-item">
                            <WorkCard imgSrc={tempData.h1.src} description={tempData.h1.description} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000} className="carousel-item">
                            <WorkCard imgSrc={tempData.h2.src} description={tempData.h2.description}/>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}  className="carousel-item">
                            <WorkCard imgSrc={tempData.h3.src} description={tempData.h3.description}/>
                        </Carousel.Item>
                    </Carousel>     
                </Col>
            </Row>
        </>
    );
}

export default LatestWork;

