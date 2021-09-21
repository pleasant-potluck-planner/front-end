import React, { useState } from "react";
import OrganizerEventUpdate from "./OrganizerEventUpdate";
import GuestEventUpdate from "./GuestEventUpdate";

const MyPotlucks = (props) => {
  const { eventInfo, setEventInfo } = props;
  const [user, setUser] = useState("ray"); // logged in user
  console.log(eventInfo);
  return (
    <>
      <div>
        <h3>Your Organized Potlucks</h3>
        <ul>
          {eventInfo.map((item, index) => {
            if (item.organizer === user) {
              return <li key={index}>{item.name}</li>;
            }
          })}
        </ul>
      </div>

      <div>
        <GuestEventUpdate eventInfo={eventInfo} setEventInfo={setEventInfo} />
      </div>
    </>
  );
};

export default MyPotlucks;
