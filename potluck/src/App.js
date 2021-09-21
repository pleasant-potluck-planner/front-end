import React, { useState } from "react";
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
import MyPotlucks from "./components/MyPotlucks";

function App() {
  const [eventInfo, setEventInfo] = useState([
    {
      organizer: "ray",
      name: "Richard's Halloween Potluck",
      date: "Halloween",
      time: "6 PM",
      location: "My House",
      guests: [
        {
          username: "john",
        },
        {
          username: "bob",
        },
      ],
      items: [
        {
          item: "hamburgers",
          volunteer: "john",
        },
        {
          item: "buns",
          volunteer: "ray",
        },
      ],
    },
  ]);

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
            <Route
              path="/potluck/orgupdate/:id"
              render={(props) => (
                <OrganizerEventUpdate
                  {...props}
                  eventInfo={eventInfo}
                  setEventInfo={setEventInfo}
                />
              )}
            />
            <Route
              path="/potluck/guestupdate/:id"
              render={(props) => (
                <GuestEventUpdate
                  {...props}
                  eventInfo={eventInfo}
                  setEventInfo={setEventInfo}
                />
              )}
              component={GuestEventUpdate}
            />
            <Route
              path="/potluck"
              render={(props) => (
                <MyPotlucks
                  {...props}
                  eventInfo={eventInfo}
                  setEventInfo={setEventInfo}
                />
              )}
            />
            <Route path="/">
              <Redirect to="/potluck" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
