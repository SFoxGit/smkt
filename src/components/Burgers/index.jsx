import React from 'react'
import { Container } from 'react-bootstrap';
import {burgers} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Burgers() {
  return (
    <Container>
      <div className="menuTitle">Burgers</div>
      {burgers.map(e => (
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
