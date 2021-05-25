import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function MenuDropdown() {
  return (
    <div class="d-flex justify-content-center">
      <DropdownButton id="dropdown-basic-button" title="Menu Sections" className="position-fixed menuDrop">
        <Dropdown.Item href="/menu">Full Menu</Dropdown.Item>
        <Dropdown.Item href="/starters">Starters</Dropdown.Item>
        <Dropdown.Item href="/salads">Salads</Dropdown.Item>
        <Dropdown.Item href="/burgers">Burgers</Dropdown.Item>
        <Dropdown.Item href="/sandwiches">Sandwiches</Dropdown.Item>
        <Dropdown.Item href="/entrees">Entrees</Dropdown.Item>
        <Dropdown.Item href="/seafood">Seafood</Dropdown.Item>
        <Dropdown.Item href="/steaks">Steaks</Dropdown.Item>
        <Dropdown.Item href="/italian">Italian</Dropdown.Item>
        <Dropdown.Item href="/kids">Kids</Dropdown.Item>
        <Dropdown.Item href="/sides">Sides</Dropdown.Item>
        <Dropdown.Item href="/beverages">Beverages</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}
