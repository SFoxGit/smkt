import React from 'react'
import { Container } from 'react-bootstrap';
import { seafood } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Seafood() {
  return (
    <Container>
      <div className="menuTitle">Seafood</div>
      {seafood.map(e => (
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