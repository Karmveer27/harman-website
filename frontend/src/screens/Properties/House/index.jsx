/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBed, FaBath, FaCar } from 'react-icons/fa';
import './index.css';

function House({ house }) {
  const urlProxy = import.meta.env.VITE_API_URL_PROXY;
  const imageUrl = house.attributes.Image?.data?.attributes?.formats?.small?.url
    ? `${urlProxy}${house.attributes.Image.data.attributes.formats.small.url}`
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
          <Card.Title as="h5" className="mb-1">
            {house.attributes.Title}
          </Card.Title>
        </a>
        <Card.Text as="h6" className="font-weight-bold text-muted">
          {house.attributes.Address}
        </Card.Text>
        <div className="mb-1">
          <FaBed /> {house.attributes.Bedrooms} / <FaBath /> {house.attributes.Bathrooms} / <FaCar /> {house.attributes.Cars}
        </div>
        
        <Card.Text as="div">
          <div className="mb-3">{house.attributes.Description}</div>
          
          {!house.attributes.isSold && (
            <div>{house.attributes.saleType}</div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default House;
