import React from 'react'
import { Container } from 'react-bootstrap';
import { salads } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Salads() {
  return (
    <Container>
      <div className="menuTitle">Salads</div>
      {salads.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </Container>
  )
}
