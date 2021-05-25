import React from 'react'
import { seafood } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Seafood() {
  return (
    <div>
      <div className="menuTitle">Seafood</div>
      {seafood.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </div>
  )
}
