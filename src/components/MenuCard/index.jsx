import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

export default function MenuCard(props) {
  return (
    <Container fluid>
      <Row>
        <Col>{props.name}</Col>
        <Col>{props.price}</Col>
      </Row>
      <Row>
        <Col>{props.description}</Col>
      </Row>
    </Container>
  )
}
