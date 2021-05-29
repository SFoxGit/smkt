import React from 'react'
import { Container } from 'react-bootstrap';
import { sides } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Sides() {
  return (
    <Container>
      <div className="menuTitle">Sides</div>
      {sides.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </Container>
  )
}
