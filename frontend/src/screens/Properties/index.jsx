import { useEffect, useState } from 'react';
import House from './House';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import './index.css';  

function Properties() {
  const [key, setKey] = useState('for-sale');
  const [houses, setHouses] = useState([]);
  
  // Fetch houses on component mount
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
        setHouses(data.data); // Set the fetched houses data
      })
      .catch((error) => console.error('Error fetching houses:', error));
  }, []);

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
              {houses.filter(house => !house.attributes.isSold).map(house => (
                <Col key={house.id} sm={12} md={6} lg={4} xl={3}>
                  <House house={house} />
                </Col>
              ))}
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="sold">
            <Row>
              {houses.filter(house => house.attributes.isSold).map(house => (
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
