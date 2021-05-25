import React from 'react'
import {salads} from "../../utils/menu";
import MenuCard from "../MenuCard";

export default function Salads() {
  return (
    <div>
      {salads.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </div>
  )
}
