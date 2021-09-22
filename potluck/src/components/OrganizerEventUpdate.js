import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AddItemForm from "./AddItemForm";

import axios from "axios";

const OrganizerEventUpdate = (props) => {
  const { potlucks, setPotlucks } = props;

  const [potluck, setPotluck] = useState({
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
  });

  useEffect(() => {
    // axios get request to populate input fields with current data
    // get data using id, populate into setEvent
  });

  const handleChange = (e) => {
    setPotluck({
      ...potluck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios put request to update event info
    // use event state info to post
  };

  const deleteItem = (itemToDelete) => {
    // axios delete request to update eventInto.items
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>update your event named {potluck.potluck_name}.</h4>
        </div>

        <div>
          <div>
            <label>Name</label>
            <input
              value={potluck.potluck_name}
              onChange={handleChange}
              name="name"
              type="text"
            />
          </div>
          <div>
            <label>Date</label>
            <input
              value={potluck.potluck_date}
              onChange={handleChange}
              name="date"
              type="text"
            />
          </div>
          <div>
            <label>Time</label>
            <input
              value={potluck.potluck_time}
              onChange={handleChange}
              name="time"
              type="text"
            />
          </div>
          <div>
            <label>Location</label>
            <input
              value={potluck.potluck_location}
              onChange={handleChange}
              name="location"
              type="text"
            />
          </div>

          <div>
            <AddItemForm
              items={potluck.items}
              potluck={potluck}
              setPotluck={setPotluck}
              deleteItem={deleteItem}
            />
          </div>
        </div>

        <div>
          <input type="submit" value="Update Event" />
          <Link to={"/potlucks"}>
            <input type="button" value="Cancel" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OrganizerEventUpdate;
