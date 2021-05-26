import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function Home() {

  return (
    <>
      <Container>
        <Row className="justify-content-center text-light">
          <h2 style={{textAlign: "center"}}>South Main Kitchen & Tavern</h2>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src="./images/beeftips.jpg" alt="beef tips with fried squash and collard greens"/>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src={"./images/flounder.jpg"} alt="Fried flounder with fries" />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src={"./images/gyro.jpg"} alt="Gyro" />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src={"./images/burger.jpg"} alt="South Main Burger" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;