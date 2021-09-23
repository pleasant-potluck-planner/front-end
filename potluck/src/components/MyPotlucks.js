import React from "react";

import OrganizerEventList from "./OrganizerEventList";
import GuestEventList from "./GuestEventList";

const MyPotlucks = (props) => {
  const { potlucks, setPotlucks } = props;

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
