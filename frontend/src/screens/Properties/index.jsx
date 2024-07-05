import React, { useState } from 'react';
import House from './House';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import './index.css';  // Make sure you have the necessary CSS for styling

function Properties() {
  const [key, setKey] = useState('for-sale');

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
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="sold">
            <Row>
              <Col sm={12} md={6} lg={4} xl={3}>
                <House />
              </Col>
              
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default Properties;
