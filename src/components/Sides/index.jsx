import React from 'react'
import {sides} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Sides() {
  return (
    <div>
      {sides.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </div>
  )
}
