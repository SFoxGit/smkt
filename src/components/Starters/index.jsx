import React from 'react';
import { starters } from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Starters() {
  return (
    <div>
      <div className="menuTitle">Starters</div>
      {starters.map(e => (
        <MenuCard
          name={e.name}
          description={e.description}
          price={e.price}
        />
      ))}
    </div>
  )
}
