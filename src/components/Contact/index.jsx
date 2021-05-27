import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap"
import "./style.css"

export default function Contact() {
  return (
    <Container>
      <Row style={{padding: "10px"}}>
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <Row className="border-bottom"><h2>South Main Kitchen & Tavern</h2></Row>
          <Row>128 South Main Street</Row>
          <Row>Mount Holly, North Carolina 28120</Row>
          <Row><a href="tel:7048128973">(704) 812-8973</a></Row>
          <Row></Row>
        </Col>
        {/* <Col xs={12} lg={6} style={{ height: "400px" }} >
          <Row className="border-bottom d-flex justify-content-center"><h2>Order</h2></Row>
          <Row>
            <Col xs={12} className="text-center mt-4">Pick-Up</Col>
            <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="tel:7048128973">Call</Button></Col>
            <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://direct.chownow.com/order/15163/locations" target="_blank">Online</Button></Col>
            <Col xs={12} className="text-center mt-4">Delivery</Col>
            <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://www.doordash.com/store/south-main-kitchen-and-tavern-mount-holly-630460" target="_blank">Doordash</Button></Col>
            <Col xs={6} className="d-flex justify-content-center"><Button className="orderBtn" href="https://www.grubhub.com/restaurant/south-main-kitchen-and-tavern-128-s-main-st-mt-holly/1517396" target="_blank">GrubHub</Button></Col>
          </Row>
        </Col> */}
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <MapContainer style={{ height: "400px", width: "100%" }} center={[35.29629, -81.01604]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.2965, -81.0166]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Col>
        <Col xs={12} lg={6} style={{ height: "400px" }}>
          <Row className="border-bottom d-flex justify-content-center"><h2>Hours</h2></Row>
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
