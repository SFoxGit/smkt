import React from 'react'
import { kids } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Kids() {
  return (
    <div>
      <div className="menuTitle">Kids</div>
      {kids.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </div>
  )
}
