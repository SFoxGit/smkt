import React from 'react'
import {burgers} from "../../utils/menu";
import MenuCard from "../MenuCard";
import {Container, Row, Col} from "react-bootstrap"

export default function Burgers() {
  return (
    <div>
      <div className="menuTitle">Burgers</div>
      {burgers.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </div>
  )
}
