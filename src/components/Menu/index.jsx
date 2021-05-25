import React from "react";
import { starters, salads, burgers, sandwiches, entrees, seafood, steaks, sides, kids, italian } from "../../utils/menu"
import MenuCard from "../MenuCard";

function Menu() {

  return (
    <>
      {starters.map(e => (
        <MenuCard 
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
      {salads.map(e => (
        <MenuCard
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
      {burgers.map(e => (
        <MenuCard
        name={e.name}
        description={e.description}
        price={e.price}
        />
      ))}
    </>
  )
}

export default Menu;