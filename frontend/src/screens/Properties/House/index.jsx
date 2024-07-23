import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

function House({ house }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/houseurl`}>
        <div className="c-image-container">
          <img src={`http://localhost:1337${house.image.url}`} alt={house.title} className="card-img-top house-img" />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/houseurl`}>
          <Card.Title as="h5" className="mb-3">
            {house.title}
          </Card.Title>
        </Link>
        <Card.Text as="h6" className="mb-2 text-muted">
          {house.address}
        </Card.Text>
        <Card.Text as="div">
          <div>Auction (unless sold prior)</div>
          <div>{house.bedrooms} Bedrooms / {house.bathrooms} Baths / {house.cars} Cars</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default House;
