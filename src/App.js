import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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


function App() {
  return (
    <Router>
      <Header />
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
          <Menu />
        </Route>
        <Route exact path="/kids">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/sides">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
