import React from "react";
import { starters, salads, burgers, sandwiches, entrees, seafood, steaks, sides, kids, italian } from "../../utils/menu"

function Menu() {

  return (
    <>
      {starters.map(e => (
        <><div>{e.name}</div>
          <div>{e.description}</div>
          <div>{e.price}</div>
        </>
      ))}
    </>
  )
}

export default Menu;