import  { useState, useEffect } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import TestCard from './TestCard';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
      const urlProxy = import.meta.env.VITE_API_URL_PROXY; 
      const apiUrl = `${urlProxy}/api/testimonials`;
  
      fetch(apiUrl)
          .then((response) => response.text())
          .then((text) => {
              return JSON.parse(text);  // this will throw an error if it's not valid JSON
          })
          .then((data) => {
              setTestimonials(data.data);
          })
          .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  const chunkSize = 3;
  const chunkedData = [];
  for (let i = 0; i < testimonials.length; i += chunkSize) {
    chunkedData.push(testimonials.slice(i, i + chunkSize));
  }

 

  return (
    <>
      <div className="container py-5 d-none d-lg-block">
        <h1>Testimonials</h1>
        <Carousel interval={3000} wrap={true} >
          {chunkedData.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <Row className="g-5">
                {chunk.map((item) => (
                  <Col key={item.id} lg={4}>
                    <TestCard name={item.attributes.Name} review={item.attributes.Message} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="container py-5 d-lg-none">
        <h1>Testimonials</h1>
        <Carousel interval={3000} wrap={true} >
          {testimonials.map((item) => (
            <Carousel.Item key={item.id}>
              <Row className="g-5 justify-content-center">
                <Col xs={12}>
                  <TestCard name={item.attributes.Name} review={item.attributes.Message} />
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Testimonials;
