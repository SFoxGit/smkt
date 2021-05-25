import React from 'react';
import {starters} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Starters() {
  return (
    <div>
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
