import  { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Row, Col, Carousel } from "react-bootstrap";
import WorkCard from "./WorkCard";

function LatestWork() {
    const [soldHouses, setSoldHouses] = useState([]);
    const urlProxy = import.meta.env.VITE_API_URL_PROXY;
    useEffect(() => {
        const urlProxy = import.meta.env.VITE_API_URL_PROXY;
        const apiUrl = `${urlProxy}/api/houses/?populate=*`;
    
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const allHouses = data.data;
                // Access the images from the nested object structure
                const tempSoldHouses = allHouses
                .filter(house => house.attributes.isSold) // Filter by sold houses
                    .map(house => ({
                        ...house,
                        imageUrl: house.attributes.Image.data.attributes.formats.small.url, // Access the small image URL
                    }))
                    .sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt))
                    .slice(0, 3); // Get the last 3 sold houses
                setSoldHouses(tempSoldHouses);
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
                                imgSrc={urlProxy + (house.attributes?.Image?.data?.attributes?.formats?.small?.url || '')} 
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
                            <Carousel.Item key={index} interval={3000} className="carousel-item">
                                <WorkCard 
                                    imgSrc={urlProxy + (house.attributes?.Image?.data?.attributes?.formats?.small?.url || '')} 
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
