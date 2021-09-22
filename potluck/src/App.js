import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";

import axios from "axios";

import OrganizerEventUpdate from "./components/OrganizerEventUpdate";
import GuestEventUpdate from "./components/GuestEventUpdate";
import MyPotlucks from "./components/MyPotlucks";

function App() {
  const [eventInfo, setEventInfo] = useState([
    {
      potluck_id: 1,
      potluck_name: "John's Potluck",
      potluck_location: "John's House",
      potluck_time: "18:00:00",
      potluck_date: "2022-02-10",
      organizer: "John",
      items: [
        {
          item_name: "Chocolate Cake",
          guestBringingItem: "John",
        },
        {
          item_name: "Red Wine",
          guestBringingItem: "John",
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get('https://potluck-planner-5.herokuapp.com/api/potlucks')
  //     .then(res => {
  //        console.log(res)
  //        setEventInfo(res.data)
  //    })
  //     .catch(err => {
  //        console.log(err)
  //    })
  // })

  return (
    <Router>
      <div className="homeBackground">
        <header>
          <nav className="nav">
            <div className="title">
              <h1>Potluck Organizer</h1>
            </div>
            <div className="links">
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
