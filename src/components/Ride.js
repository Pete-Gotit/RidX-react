import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Ride.css';


  function Ride() {
    const [currentTab, setCurrentTab] = useState(
      localStorage.getItem("activeTab") || "first"
    );
  
    const handleSelect = (eventKey) => {
      setCurrentTab(eventKey);
      localStorage.setItem("activeTab", eventKey);
    };

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        defaultActiveKey="first"
        activeKey={currentTab}
        onSelect={handleSelect}
        className="mb-3 main-tab"
      >
        <Tab eventKey="ride" title="Ride"  className="mb-3 ride-tab" >
          Request a ride
          <Form>
            <Form.Group className="mb-3 ride-tab" controlId="formAddress">
              <Form.Control type="pickup-location" placeholder="Enter pickup location" />
            </Form.Group>

            <Form.Group className="mb-3 ride-tab" controlId="formAddress">
              <Form.Control type="destination" placeholder="Enter destination" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Request
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="fare-estimator" title="Fare Estimator" className="mb-3 ride-tab">
          Plan ahead before you head out !
          <Form>
            <Form.Group className="mb-3 ride-tab" controlId="formAddress">
              <Form.Control type="pickup-location" placeholder="Enter pickup location" />
            </Form.Group>

            <Form.Group className="mb-3 ride-tab" controlId="formAddress">
              <Form.Control type="destination" placeholder="Enter destination" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </>
  );
}

export default Ride;

