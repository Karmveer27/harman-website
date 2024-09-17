/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';
import './index.css'; 

function TestCard({ name, review }) {
  return (
    <Card className="dark-card mb-4">
      <Card.Body>
        <Card.Title as="div" className="product-title">
          <strong>{name}</strong>
        </Card.Title>
        <div className="testimonial-container">
          <Card.Text as="p" className="testimonial-text">
            {review}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TestCard;
