import React, { useState, useEffect } from "react";

import axios from "axios";

const GuestEventUpdate = () => {
  const [eventInfo, setEventInfo] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    items: [],
  });

  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // axios get request to populate food items guest can select/deselect
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuestName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Please enter your name</label>
        <input value={guestName} name="guestName" type="text" />
        <div>
          <input type="submit" value="Add Name" />
        </div>
      </form>
      <div>
        <h4>You have been invited to {eventInfo.name}'s potluck!</h4>
        <h4>Date: {eventInfo.date}</h4>
        <h4>Time: {eventInfo.time}</h4>
        <h4>Location: {eventInfo.location}</h4>
      </div>

      <div>
        <div>
          <h4>Thanks for bringing the food items below!</h4>
          <ul>
            {eventInfo.items.filter((item, index) => {
              let filteredItem = item.volunteer === volunteer;
              return <li id={index}> {filteredItem} </li>;
            })}
          </ul>
        </div>

        <div>
          <ul>
            {eventInfo.items.map((item, index) => (
              <GuestFoodList
                id={index}
                item={item}
                guestName={guestName}
                setEventInfo={setEventInfo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuestEventUpdate;
