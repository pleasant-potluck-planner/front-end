import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const OrganizerEventList = (props) => {
  const { item, setPotlucks, potlucks } = props;

  const deleteEvent = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://potluck-planner-5.herokuapp.com/api/potlucks/${item.potluck_id}`
      )
      .then((res) => {
        console.log(res);
        let updatedPotlucks = potlucks.map((event) => {
          return event.potluck_id !== item.potluck_id;
        });
        setPotlucks(updatedPotlucks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td>{item.potluck_name}</td>
      <td>{item.potluck_date}</td>
      <td>{item.potluck_time}</td>
      <td>{item.potluck_location}</td>
      <td>
        <Link to={`/potlucks/orgupdate/${item.potluck_id}`}>
          <input type="button" value="Update Event" />
        </Link>
      </td>
      <td>
        <input type="button" value="Delete Event" onClick={deleteEvent} />
      </td>
    </tr>
  );
};

export default OrganizerEventList;
