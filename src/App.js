import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
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

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Open />
          <Home />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Open />
          <Menu />
        </Route>
        <Route exact path="/starters">
          <MenuDropdown />
          <Open />
          <Starters />
        </Route>
        <Route exact path="/salads">
          <MenuDropdown />
          <Open />
          <Salads />
        </Route>
        <Route exact path="/burgers">
          <MenuDropdown />
          <Open />
          <Burgers />
        </Route>
        <Route exact path="/sandwiches">
          <MenuDropdown />
          <Open />
          <Sandwiches />
        </Route>
        <Route exact path="/entrees">
          <MenuDropdown />
          <Open />
          <Entrees />
        </Route>
        <Route exact path="/seafood">
          <MenuDropdown />
          <Open />
          <Seafood />
        </Route>
        <Route exact path="/steaks">
          <MenuDropdown />
          <Open />
          <Steaks />
        </Route>
        <Route exact path="/italian">
          <MenuDropdown />
          <Open />
          <Italian />
        </Route>
        <Route exact path="/kids">
          <MenuDropdown />
          <Open />
          <Kids />
        </Route>
        <Route exact path="/sides">
          <MenuDropdown />
          <Open />
          <Sides />
        </Route>
        <Route exact path="/beverages">
          <MenuDropdown />
          <Open />
          <Beverages />
        </Route>
        <Route exact path="/events">
          <Open />
          <Events />
        </Route>
        <Route exact path="/contact">
          <Open />
          <Contact />
        </Route>
        <Route>
          <Home />
          <Open />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
