import React from "react";
import { Link } from "react-router-dom";

const GuestEventList = (props) => {
  const { item, index } = props;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>{item.location}</td>
      <td>
        <Link to={`/potluck/guestupdate/${index}`}>
          <input type="button" value="Update" />
        </Link>
      </td>
    </tr>
  );
};

export default GuestEventList;
