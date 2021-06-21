import React from 'react'
import { Container } from 'react-bootstrap';
import { steaks } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Steaks() {
  return (
    <Container>
      <div className="menuTitle">Steaks</div>
      {steaks.map(e => (
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
