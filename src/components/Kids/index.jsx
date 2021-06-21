import React from 'react'
import { kids } from "../../utils/menu";
import MenuCard from "../MenuCard";
import { Container } from 'react-bootstrap';

export default function Kids() {
  return (
    <Container>
      <div className="menuTitle">Kids</div>
      {kids.map(e => (
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
