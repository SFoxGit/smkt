import React from 'react'
import { italian } from "../../utils/menu";
import MenuCard from "../MenuCard";
import { Container } from 'react-bootstrap';

export default function Italian() {
  return (
    <Container>
      <div className="menuTitle">Italian</div>
      {italian.map(e => (
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
