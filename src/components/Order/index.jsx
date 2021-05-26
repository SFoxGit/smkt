import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col, Button } from "react-bootstrap"
import "./style.css"

export default function Order() {
  return (
    <Container>
      <Col xs={12} lg={6} style={{ height: "400px" }}>
        <Row className="border-bottom"><h2>Order</h2></Row>
        <Row>
          <Col xs={12} className="text-center mt-4">Pick-Up</Col>
          <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="tel:7048128973">Call</Button></Col>
          <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://direct.chownow.com/order/15163/locations" target="_blank">Online</Button></Col>
          <Col xs={12} className="text-center mt-4">Delivery</Col>
          <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://www.doordash.com/store/south-main-kitchen-and-tavern-mount-holly-630460" target="_blank">Doordash</Button></Col>
          <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://www.grubhub.com/restaurant/south-main-kitchen-and-tavern-128-s-main-st-mt-holly/1517396" target="_blank">GrubHub</Button></Col>
        </Row>
      </Col>
    </Container>
  )
}