import React, { useState } from "react";

const OrganizerEventUpdate = () => {
  const [eventInfo, setEventInfo] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    items: [],
  });

  const handleChange = (e) => {
    setEventInfo({
      ...eventInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios put request
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>update your event named {state.name}.</h4>
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
