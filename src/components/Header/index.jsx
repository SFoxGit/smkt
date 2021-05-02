import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import './style.css'

function Header() {


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
        <Nav className="ml-auto navLinks col-8 justify-content-between text-center">
          <Nav.Link className="link col-xs-12 col-md-3" href="/menu">Menu</Nav.Link>
          <Nav.Link className="link col-xs-12 col-md-3" href="/events">Events</Nav.Link>
          <Nav.Link className="link col-xs-12 col-md-3" href="/contact">Contact Us</Nav.Link>
          <Nav.Link className="link col-xs-12 col-md-3" href="/order">Order</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;