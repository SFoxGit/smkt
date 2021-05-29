import React from 'react'
import { Container } from 'react-bootstrap';
import { sandwiches } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Sandwiches() {
  return (
    <Container>
      <div className="menuTitle">Sandwiches</div>
      {sandwiches.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </Container>
  )
}
