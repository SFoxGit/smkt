import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap'

function Events() {
  return (
    <Container>
      <Row style={{ padding: "10px" }}>
        <Col xs={12}><Row className="border-bottom mb-4"><h2>Summer Concert Series</h2></Row></Col>
        <Col xs={12} lg={5} style={{ padding: "10px" }}>
          <Row>Our patio is the perfect place to enjoy the Mount Holly Summer Concert Series!</Row>
        </Col>
        <Col xs={0} lg={2}></Col>
        <Col xs={12} lg={5} style={{ height: "400px", padding: "10px" }} className="mb-3">
          <Image style={{ height: "400px", objectFit: "cover" }} src={window.location.origin + "/images/patio.jpg"} roundedCircle fluid />
        </Col>
      </Row>
      <Row style={{ padding: "10px" }}>
      <Col xs={12}><Row className="border-bottom mb-4"><h2>Reserve our tavern for your event</h2></Row></Col>
        <Col xs={12} lg={5} style={{ height: "400px", padding: "10px" }} className="mb-3">
          <Image style={{ height: "400px", objectFit: "cover" }} src="/images/bar.jpg" roundedCircle fluid />
        </Col>
        <Col xs={0} lg={2}></Col>
        <Col xs={12} lg={5} style={{ padding: "10px" }}>
          <Row><a style={{ textDecoration: "none", margin: "0px" }} href="tel:7048128973">Call for pricing!</a></Row>
          <Row><div>Perfect for:</div></Row>
          <Row><div>Birthdays</div></Row>
          <Row><div>Meetings</div></Row>
          <Row><div>Holiday Parties</div></Row>
          <Row><div>Weddings</div></Row>
          <Row><div>Receptions</div></Row>
          <Row><div>Fund Raisers</div></Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Events;