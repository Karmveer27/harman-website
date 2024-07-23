import React, { useEffect, useState } from 'react';
import House from './House';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import './index.css';

function Properties() {
  const [key, setKey] = useState('for-sale');
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/houses')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setHouses(data);
        } else {
          setError('Data format error: Expected an array');
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching houses:', error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const forSaleHouses = houses.filter(house => !house.isSold);
  const soldHouses = houses.filter(house => house.isSold);

  return (
    <>
      <h1 className="text-center py-5">LISTINGS</h1>
      <Tab.Container id="listings-tabs" defaultActiveKey="for-sale" activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="pills" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="for-sale">For Sale</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sold">Sold</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="for-sale">
            <Row>
              {forSaleHouses.map(house => (
                <Col key={house.id} sm={12} md={6} lg={4} xl={3}>
                  <House house={house} />
                </Col>
              ))}
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="sold">
            <Row>
              {soldHouses.map(house => (
                <Col key={house.id} sm={12} md={6} lg={4} xl={3}>
                  <House house={house} />
                </Col>
              ))}
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default Properties;
