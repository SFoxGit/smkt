import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

export default function MenuCard(props) {
  return (
    <Container fluid className="menuCard">
      <Row>
        <Col xs={9}>{props.name}</Col>
        <Col xs={3} className="text-right">{props.price}</Col>
      </Row>
      <Row>
        <Col xs={11} className="ml-4">{props.description}</Col>
      </Row>
    </Container>
  )
}
