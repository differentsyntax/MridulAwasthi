import './App.css';
import Home from './pages/home';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <div className = "App">
          {/* <Navbar bg = "dark" /> */}
          <div id = "page-body" >
            <Switch>
              <Route path = "/" component = {Home} exact />
              <Route path = "/experience" component = {Home} exact/>
              <Route path = "/projects" component = {Home} exact/>
              <Route path = "/dragonhacks" component = {Home} exact/>
              <Route path = "/really" component = {Home} exact/>
              {/* <Route component = {Notfoundpage} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
