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
          <Menu />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Starters />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/menu">
          <MenuDropdown />
          <Menu />
        </Route>
        <Route exact path="/menu">
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
