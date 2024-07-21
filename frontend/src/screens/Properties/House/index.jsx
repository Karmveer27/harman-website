import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';  

function House() {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/houseurl`}>
        <div className="c-image-container">
          <img src="suit1.jpg" alt="House for Sale" className="card-img-top house-img" />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/houseurl`}>
          <Card.Title as="h5" className="mb-3">
            House for Sale
          </Card.Title>
        </Link>
        <Card.Text as="h6" className="mb-2 text-muted">
          25 McInnes Road, Weymouth
        </Card.Text>
        <Card.Text as="div">
          <div>Auction (unless sold prior)</div>
          <div>3 Bedrooms / 2 Baths / 2 Cars</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default House;
