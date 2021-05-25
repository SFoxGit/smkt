import React from 'react'
import {drinks} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Beverages() {
  return (
    <div>
      <div className="menuTitle">Beverages</div>
      {drinks.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </div>
  )
}
