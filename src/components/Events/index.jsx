import React from "react";
import { Container, Button, Row, Col } from 'react-bootstrap'

function Events() {

  return (
    <Container>
      <Row style={{ padding: "10px" }}>
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <Row className="border-bottom"><h2>Summer Concert Series</h2></Row>
          <Row>Our patio is the perfect place to enjoy the Mount Holly Summer Concert Series!</Row>
        </Col>
      </Row>
      <Row style={{ padding: "10px" }}>
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <Row className="border-bottom"><h2>Reserve our tavern for your event</h2></Row>
          <Row>Call for pricing! <a className="ml-2" href="tel:7048128973">(704) 812-8973</a></Row>
          <Row>Perfect for:</Row>
          <Row className="ml-2">Birthdays</Row>
          <Row className="ml-2">Meetings</Row>
          <Row className="ml-2">Holiday Parties</Row>
          <Row className="ml-2">Weddings</Row>
          <Row className="ml-2">Receptions</Row>
          <Row className="ml-2">Fund Raisers</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Events;