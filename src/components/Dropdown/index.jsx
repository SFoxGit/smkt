import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function MenuDropdown() {
  return (
      <DropdownButton id="dropdown-basic-button" title="Menu Sections">
        <Dropdown.Item href="/menu">Full Menu</Dropdown.Item>
        <Dropdown.Item href="/starters">Starters</Dropdown.Item>
        <Dropdown.Item href="/salads">Salads</Dropdown.Item>
        <Dropdown.Item href="/burgers">Burgers</Dropdown.Item>
        <Dropdown.Item href="/sandwiches">Sandwiches</Dropdown.Item>
        <Dropdown.Item href="/">Entrees</Dropdown.Item>
        <Dropdown.Item href="/">Seafood</Dropdown.Item>
        <Dropdown.Item href="/">Steaks</Dropdown.Item>
        <Dropdown.Item href="/">Italian</Dropdown.Item>
        <Dropdown.Item href="/">Kids</Dropdown.Item>
        <Dropdown.Item href="/">Sides</Dropdown.Item>
      </DropdownButton>
  )
}
