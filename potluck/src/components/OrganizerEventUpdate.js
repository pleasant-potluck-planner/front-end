import React, { useState, useEffect } from "react";

import AddItemForm from "./AddItemForm";

import axios from "axios";

const OrganizerEventUpdate = () => {
  const [eventInfo, setEventInfo] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    items: [
      {
        item: "",
        volunteer: "",
      },
    ],
  });

  useEffect(() => {
    // axios get request to populate input fields with current data
  });

  const handleChange = (e) => {
    setEventInfo({
      ...eventInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios put request to update event info
  };

  const deleteItem = (itemToDelete) => {
    // axios delete request to update eventInto.items
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>update your event named {eventInfo.name}.</h4>
        </div>

        <div>
          <div>
            <label>Name</label>
            <input
              value={eventInfo.name}
              onChange={handleChange}
              name="name"
              type="text"
            />
          </div>
          <div>
            <label>Date</label>
            <input
              value={eventInfo.date}
              onChange={handleChange}
              name="date"
              type="text"
            />
          </div>
          <div>
            <label>Time</label>
            <input
              value={eventInfo.time}
              onChange={handleChange}
              name="time"
              type="text"
            />
          </div>
          <div>
            <label>Location</label>
            <input
              value={eventInfo.location}
              onChange={handleChange}
              name="location"
              type="text"
            />
          </div>
          <div>
            <label>Add Food Item</label>
            <input onChange={handleChange} name="location" type="text" />
          </div>
          <div>
            <AddItemForm
              items={eventInfo.items}
              eventInfo={eventInfo}
              setEventInfo={setEventInfo}
              deleteItem={deleteItem}
            />
          </div>
        </div>

        <div>
          <input type="submit" value="Update Event" />
          {/* <Link to={'/home/'}> */}
          <input type="button" value="Cancel" />
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default OrganizerEventUpdate;
