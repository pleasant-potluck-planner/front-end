import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import PotluckContext from "../contexts/PotluckContext";

import OrganizerEventList from "./OrganizerEventList";
import GuestEventList from "./GuestEventList";
import OrganizerEventUpdate from "./OrganizerEventUpdate";

const MyPotlucks = (props) => {
  const { Provider } = PotluckContext;
  const [potlucks, setPotlucks] = useState([]);

  useEffect(() => {
    axios
      .get("https://potluck-planner-5.herokuapp.com/api/potlucks/1")
      .then((res) => {
        setPotlucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Provider value={potlucks}>
      <section>
        <div>
          <h3>Your Organized Potlucks</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {potlucks.map((item) => {
                return (
                  <OrganizerEventList
                    key={item.potluck_id}
                    item={item}
                    potlucks={potlucks}
                    setPotlucks={setPotlucks}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h3>Potlucks to Attend</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {potlucks.map((item) => {
                return <GuestEventList key={item.potluck_id} item={item} />;
              })}
            </tbody>
          </table>
        </div>

        <Route
          path="/potlucks/orgupdate/:id"
          render={(props) => (
            <OrganizerEventUpdate {...props} setPotlucks={setPotlucks} />
          )}
        />
      </section>
    </Provider>
  );
};

export default MyPotlucks;
