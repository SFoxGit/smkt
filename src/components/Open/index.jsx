import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

export default function Open() {
  const d = new Date()
  if (d === 0) {const hours = "11:00 am - 4:00 pm"}
  if (d === 1) {const hours = "Closed on Mondays"}
  if (d < 1 && d > 5) {const hours = "11:00 am - 9:00 pm"}
  if (d > 4) {const hours = "11:00 am - 10:00 pm"}
  return (
    <Container>
      <Row>
        <Col className="text-right">
        {hours}
        </Col>
      </Row>
    </Container>
  )
}
