import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Order from './components/Order';
import Home from './components/Home';
import Menu from './components/Menu';
import Events from './components/Events';
import Contact from './components/Contact';
import MenuDropdown from './components/Dropdown';
import Starters from './components/Starters';
import Salads from './components/Salads';
import Burgers from './components/Burgers';
import Sandwiches from './components/Sandwiches';
import Entrees from './components/Entrees';
import Seafood from './components/Seafood';
import Steaks from './components/Steaks';
import Italian from './components/Italian';
import Kids from './components/Kids';
import Sides from './components/Sides';
import Beverages from './components/Beverages';
import Open from './components/Open';
import NightMode from './components/NightMode';



function App() {
  return (
    <Router>
      <Header />
      <Open />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/starters">
          <MenuDropdown />
          <Starters />
        </Route>
        <Route exact path="/salads">
          <MenuDropdown />
          <Salads />
        </Route>
        <Route exact path="/burgers">
          <MenuDropdown />
          <Burgers />
        </Route>
        <Route exact path="/sandwiches">
          <MenuDropdown />
          <Sandwiches />
        </Route>
        <Route exact path="/entrees">
          <MenuDropdown />
          <Entrees />
        </Route>
        <Route exact path="/seafood">
          <MenuDropdown />
          <Seafood />
        </Route>
        <Route exact path="/steaks">
          <MenuDropdown />
          <Steaks />
        </Route>
        <Route exact path="/italian">
          <MenuDropdown />
          <Italian />
        </Route>
        <Route exact path="/kids">
          <MenuDropdown />
          <Kids />
        </Route>
        <Route exact path="/sides">
          <MenuDropdown />
          <Sides />
        </Route>
        <Route exact path="/beverages">
          <MenuDropdown />
          <Beverages />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
      {/* <NightMode /> */}
    </Router>
  );
}

export default App;
