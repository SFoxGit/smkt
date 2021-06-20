import React, { useState } from "react";
import { Navbar, Nav, Modal, Button, Row, Col } from 'react-bootstrap'
import './style.css'

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="./images/smktLogo.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="SMKT Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="col-xs-0 col-md-3"></div>
        <Nav className="ml-auto navLinks col-xs-12 col-md-9 justify-content-between text-center">
          <Nav.Link className="link col-xs-12 col-md-3" href="/menu">Menu</Nav.Link>
          <Nav.Link className="link col-xs-12 col-md-3" href="/events">Events</Nav.Link>
          <Nav.Link className="link col-xs-12 col-md-3" href="/contact">Contact Us</Nav.Link>
          <div className="nav-link link col-xs-12 col-md-3 order" onClick={handleShow}>Order</div>
        </Nav>
      </Navbar.Collapse>
      <Modal style={{zIndex: "3000"}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Row><h2>Order</h2></Row>
        </Modal.Header>
        <Modal.Body>
          <Col xs={12} >
            <Row>
              <Col xs={12} className="text-center mt-4">Pick-Up</Col>
              <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="tel:7048128973">Call</Button></Col>
              <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://direct.chownow.com/order/15163/locations" target="_blank">Online</Button></Col>
              <Col xs={12} className="text-center mt-4">Delivery</Col>
              <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://www.doordash.com/store/south-main-kitchen-and-tavern-mount-holly-630460" target="_blank">Doordash</Button></Col>
              <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://www.grubhub.com/restaurant/south-main-kitchen-and-tavern-128-s-main-st-mt-holly/1517396" target="_blank">GrubHub</Button></Col>
            </Row>
          </Col>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Navbar>
  )
}

export default Header;