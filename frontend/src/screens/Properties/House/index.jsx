import React from 'react';
import { Card } from 'react-bootstrap';
import './index.css';

function House({ house }) {
  const imageUrl = house.attributes.Image && house.attributes.Image.data && house.attributes.Image.data.attributes && house.attributes.Image.data.attributes.url
    ? `http://localhost:1337${house.attributes.Image.data.attributes.url}`
    : 'default-image.jpg'; // Path to a default image if no image is provided

  const externalUrl = house.attributes.url ? (house.attributes.url.startsWith('http') ? house.attributes.url : `http://${house.attributes.url}`) : '#';

  return (
    <Card className="my-3 p-3 rounded">
      <a href={externalUrl} target="_blank" rel="noopener noreferrer"> {/* Use <a> for external link */}
        <div className="c-image-container">
          <img src={imageUrl} alt={house.attributes.Title} className="card-img-top house-img" />
        </div>
      </a>
      <Card.Body>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer"> {/* Use <a> for external link */}
          <Card.Title as="h5" className="mb-3">
            {house.attributes.Title}
          </Card.Title>
        </a>
        <Card.Text as="h6" className="mb-2 text-muted">
          {house.attributes.Address}
        </Card.Text>
        <Card.Text as="div">
        {!house.attributes.isSold && (
            <div>{house.attributes.saleType}</div>
        )}
          <div>{house.attributes.Bedrooms} Bedrooms / {house.attributes.Bathrooms} Baths / {house.attributes.Cars} Cars</div>
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default House;
