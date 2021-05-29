import React from 'react'
import { Container } from 'react-bootstrap';
import {drinks} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Beverages() {
  return (
    <Container>
      <div className="menuTitle">Beverages</div>
      {drinks.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </Container>
  )
}
