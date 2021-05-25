import React from 'react'
import {burgers} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Burgers() {
  return (
    <div>
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
