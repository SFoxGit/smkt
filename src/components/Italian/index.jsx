import React from 'react'
import { italian } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Italian() {
  return (
    <div>
      <div className="menuTitle">Italian</div>
      {italian.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </div>
  )
}
