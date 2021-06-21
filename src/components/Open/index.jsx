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
    if (d === 0) { 
      setHours("11:00 am - 4:00 pm") 
      if (h < 11 || h > 15) { setOpen(false)}
    }
    if (d === 1) { 
      setHours("Closed on Mondays") 
      setOpen(false)
    }
    if (d > 1 && d < 5) { 
      setHours("11:00 am - 9:00 pm") 
      if (h < 11 || h > 20) { setOpen(false)}
    }
    if (d > 4) { 
      setHours("11:00 am - 10:00 pm") 
      if (h < 11 || h > 21) { setOpen(false)}
    }


  }, [])
  return (
    <Container>
      <Row className="open">
          <Col xs="12" className="d-flex justify-content-end" >Today's hours: </Col>
          <Col xs="12" className="d-flex justify-content-end" >{hours}</Col>
          <Col xs="12" className="d-flex justify-content-end" style={{ color: "red" }}>{open ? "Currently Open " : "Currently Closed "}</Col>
      </Row>
    </Container>
  )
}
