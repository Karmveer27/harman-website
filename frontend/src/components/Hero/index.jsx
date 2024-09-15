import  { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Hero() {
    const [homeImage, setHomeImage] = useState('');

    useEffect(() => {
        const urlProxy = import.meta.env.VITE_API_URL_PROXY;
        const apiUrl = `${urlProxy}/api/home-image/?populate=*`;
        

        fetch(apiUrl)
        .then((response) => response.text())
        .then((text) => {
        return JSON.parse(text);  // this will throw an error if it's not valid JSON
        })
        .then((data) => {
            setHomeImage(urlProxy + data.data.attributes.image.data.attributes.url);
        })
        .catch((error) => console.error('Error fetching Hero Image:', error));
    }, []);
   
    return (
        
        <Row className="align-items-center min-vh-100 hero-padding">
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
                <h1 className="font-weight-bold pb-3">Have Any Questions?</h1>
                <p className="text-muted text-left">
                Harman Singh, an enthusiastic and devoted real estate professional, has joined the industry with a heartfelt mission: to assist individuals in discovering their dream homes and achieving their real estate aspirations in Auckland. 
                </p>
                <div className="d-flex justify-content-start">
                    <Link to="/contact" className="btn btn-warning btn-lg">Contact us</Link>
                </div>
            </Col>
            <Col lg={6} md={12} className="text-center hero-work-card">
                <img src={homeImage} alt="Contact" className="img-fluid rounded" />
            </Col>
        </Row>
    );
}

export default Hero;
