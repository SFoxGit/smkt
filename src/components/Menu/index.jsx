import React from "react";
import Starters from '../Starters';
import Salads from '../Salads';
import Burgers from '../Burgers';
import Sandwiches from '../Sandwiches';
import Entrees from '../Entrees';
import Seafood from '../Seafood';
import Steaks from '../Steaks';
import Italian from '../Italian';
import Kids from '../Kids';
import Sides from '../Sides';
import Beverages from "../Beverages";
import { Row } from "react-bootstrap";

function Menu() {

  return (
    <>
      <Row className="justify-content-center"><h2>Menu</h2></Row>
      <Starters />
      <Salads />
      <Burgers />
      <Sandwiches />
      <Entrees />
      <Seafood />
      <Steaks />
      <Italian />
      <Kids />
      <Sides />
      <Beverages />
    </>
  )
}

export default Menu;