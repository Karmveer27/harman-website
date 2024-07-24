import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Row, Col, Carousel } from "react-bootstrap";
import WorkCard from "./WorkCard";

function LatestWork() {
    const [soldHouses, setSoldHouses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/houses/?populate=*')
          .then((response) => response.json())
          .then((data) => {
            const allHouses = data.data;
            const tempSoldHouses = allHouses.filter(house => house.attributes.isSold)
                                            .sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt))
                                            .slice(0, 3); // Get the last 3 sold houses
            setSoldHouses(tempSoldHouses);
            console.log(tempSoldHouses)
          })
          .catch((error) => console.error('Error fetching houses:', error));
      }, []);

    return (
        <>
            <h1>Our Latest Work</h1>
            <Row className='d-none d-lg-flex justify-content-center'>
                <div className="latest-work-container">
                    {soldHouses.map((house, index) => (
                        <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                            <WorkCard 
                                imgSrc={`http://localhost:1337${house.attributes.Image.data.attributes.formats.small.url}`} 
                                description={house.attributes.Description} 
                            />
                        </Col>
                    ))}
                </div>
            </Row>
        
            <Row className="d-flex d-lg-none">
                <Col>
                    <Carousel id="carouselExampleInterval" data-bs-theme="dark">
                        {soldHouses.map((house, index) => (
                            <Carousel.Item key={index} interval={2000} className="carousel-item">
                                <WorkCard 
                                    imgSrc={`http://localhost:1337${house.attributes.Image.data.attributes.formats.small.url}`} 
                                    description={house.attributes.Description} 
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>     
                </Col>
            </Row>
        </>
    );
}

export default LatestWork;
