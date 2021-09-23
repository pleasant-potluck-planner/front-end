import React, { useState, useEffect } from "react";
import axios from "axios";

import OrganizerEventList from "./OrganizerEventList";
import GuestEventList from "./GuestEventList";

const MyPotlucks = (props) => {
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
            </tr>
          </thead>
          <tbody>
            {potlucks.map((item) => {
              return <OrganizerEventList key={item.potluck_id} item={item} />;
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
    </section>
  );
};

export default MyPotlucks;
