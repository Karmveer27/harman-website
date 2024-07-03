import React, { useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import TestCard from './TestCard';

function Testimonials() {
    const tempData = [
        { name: "Zoe Mantis", review: "Great first house, come have a look!" },
        { name: "Seiko", review: "Great first house, come have a look!" },
        { name: "Asta Rumi", review: "Great first house, come have a look!" },
        { name: "Clark Kent", review: "Great first house, come have a look!" },
        { name: "Bruce Wayne", review: "Great first house, come have a look!" },
    ];

    const chunkSize = 3;
    const chunkedData = [];
    for (let i = 0; i < tempData.length; i += chunkSize) {
        chunkedData.push(tempData.slice(i, i + chunkSize));
    }

    return (
        <div className="container py-5">
            <h1>Testimonials</h1>
            <Carousel interval={5000} wrap={true}  data-bs-theme="dark">
                {chunkedData.map((chunk, chunkIndex) => (
                    <Carousel.Item key={chunkIndex}>
                        <Row className="g-5">
                            {chunk.map((item, index) => (
                                <Col key={index} lg={4}>
                                    <TestCard name={item.name} review={item.review} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Testimonials;
