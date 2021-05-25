import React from 'react'
import { sandwiches } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Sandwiches() {
  return (
    <div>
      <div className="menuTitle">Sandwiches</div>
      {sandwiches.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </div>
  )
}
