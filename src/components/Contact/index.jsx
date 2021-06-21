import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap"
import "./style.css"

export default function Contact() {
  return (
    <Container>
      <Row style={{ padding: "10px" }}>
      <Col xs={12}><Row className="border-bottom mb-4"><h2>South Main Kitchen & Tavern</h2></Row></Col>
        <Col xs={12} lg={6} className="mb-3">
          <Row><div>128 South Main Street</div></Row>
          <Row><div>Mount Holly, North Carolina 28120</div></Row>
          <Row><a href="tel:7048128973">(704) 812-8973</a></Row>
          <Row></Row>
        </Col>
        <Col xs={12} lg={6} style={{ height: "400px" }} className="mb-3">
          <MapContainer style={{ height: "400px", width: "100%" }} center={[35.29629, -81.01604]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.2965, -81.0166]}>
              <Popup>
                South Main Kitchen & Tavern <br /> 128 South Main St <br /> Mount Holly, NC
              </Popup>
            </Marker>
          </MapContainer>
        </Col>
        <Col xs={12}><Row className="border-bottom mb-4"><h2>Hours</h2></Row></Col>
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <Row><Col className="days" xs={4}>Monday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 9:00 PM</Col></Row>
          <Row><Col className="days" xs={4}>Tuesday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 9:00 PM</Col></Row>
          <Row><Col className="days" xs={4}>Wednesday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 9:00 PM</Col></Row>
          <Row><Col className="days" xs={4}>Thursday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 9:00 PM</Col></Row>
          <Row><Col className="days" xs={4}>Friday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 10:00 PM</Col></Row>
          <Row><Col className="days" xs={4}>Saturday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 10:00 PM</Col></Row>
          <Row><Col className="days" xs={4}>Sunday</Col> <Col className="timeOpen" xs={8}>11:00 AM - 4:00 PM</Col></Row>
        </Col>
      </Row>
    </Container>
  )
}
