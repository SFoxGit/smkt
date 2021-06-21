import React from 'react'
import { Container } from 'react-bootstrap';
import { entrees } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Entrees() {
  return (
    <Container>
      <div className="menuTitle">Entrees</div>
      {entrees.map(e => (
        <MenuCard
          key={e.name}
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </Container>
  )
}
