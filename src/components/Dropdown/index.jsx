import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function MenuDropdown() {
  return (
      <DropdownButton id="dropdown-basic-button" title="Menu Sections">
        <Dropdown.Item href="/menu">Full Menu</Dropdown.Item>
        <Dropdown.Item href="/starters">Starters</Dropdown.Item>
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
  )
}
