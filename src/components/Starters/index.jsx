import React from 'react';
import { Container } from 'react-bootstrap';
import { starters } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Starters() {
  return (
    <Container>
      <div className="menuTitle">Starters</div>
      {starters.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </Container>
  )
}
