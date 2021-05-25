import React from 'react'
import { entrees } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Entrees() {
  return (
    <div>
      <div className="menuTitle">Entrees</div>
      {entrees.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </div>
  )
}
