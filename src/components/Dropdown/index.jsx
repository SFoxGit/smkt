import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function MenuDropdown() {
  return (
    <div className="d-flex justify-content-center dropCont" style={{marginBottom: "60px"}}>
      <DropdownButton id="dropdown-basic-button" title="Menu Sections" className="position-fixed menuDrop">
        <Dropdown.Item href="/smkt/#/menu">Full Menu</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/starters">Starters</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/salads">Salads</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/burgers">Burgers</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/sandwiches">Sandwiches</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/entrees">Entrees</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/seafood">Seafood</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/steaks">Steaks</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/italian">Italian</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/kids">Kids</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/sides">Sides</Dropdown.Item>
        <Dropdown.Item href="/smkt/#/beverages">Beverages</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}
