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
            <Image fluid src="./images/beeftips.jpg"/>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src={"./images/flounder.jpg"}/>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src={"./images/gyro.jpg"}/>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Image fluid src={"./images/burger.jpg"}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;