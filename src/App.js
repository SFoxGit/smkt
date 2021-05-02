import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Events from './components/Events';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
