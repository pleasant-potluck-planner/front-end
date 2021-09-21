import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";

import OrganizerEventUpdate from "./components/OrganizerEventUpdate";
import GuestEventUpdate from "./components/GuestEventUpdate";

function App() {
  return (
    <Router>
      <div className="homeBackground">
        <header>
          <nav className="nav">
            <div className="title">
              <h1>Potluck Organizer</h1>
            </div>
            <div className="links">
              <Link to="/home">Home</Link>
              <Link to="/login">Log In</Link>
              <Link to="/logout">Log Out</Link>
              <Link to="/create">Start a Potluck</Link>
              <Link to="/potluck">My Potlucks</Link>
            </div>
          </nav>
        </header>

        <div>
          <Switch>
            <Route path="/potluck" component={GuestEventUpdate} />
            <Route path="/create" component={OrganizerEventUpdate} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
