import React from 'react'
import {steaks} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Steaks() {
  return (
    <div>
      {steaks.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </div>
  )
}
