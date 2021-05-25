import React from "react";
import { starters, salads, burgers, sandwiches, entrees, seafood, steaks, sides, kids, italian } from "../../utils/menu"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function Menu() {

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Menu Sections">
        <Dropdown.Item href="#/action-1">Full Menu</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Starters</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Salads</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Burgers</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sandwiches</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Entrees</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Seafood</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Steaks</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Kids</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sides</Dropdown.Item>
      </DropdownButton>
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