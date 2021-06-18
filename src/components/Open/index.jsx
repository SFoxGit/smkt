import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default function Open() {
  const [hours, setHours] = useState()
  const [open, setOpen] = useState(true)
  useEffect(() => {
    const someDate = new Date()
    const d = someDate.getDay()
    const h = someDate.getHours()

    if (d === 0) { setHours("Today's hours: 11:00 am - 4:00 pm") }
    if (d === 1) { setHours("Closed on Mondays") }
    if (d > 1 && d < 5) { setHours("Today's hours: 11:00 am - 9:00 pm") }
    if (d > 4) { setHours("Today's hours: 11:00 am - 10:00 pm") }


  }, [])
  return (
    <Container>
      <Row>
        <Col className="float-right">
          <div className="text-right" style={{ color: "red" }}>{open ? "Currently Open " : "Currently Closed "}</div>
          <div className="text-right" >{hours}</div>
        </Col>
      </Row>
    </Container>
  )
}
