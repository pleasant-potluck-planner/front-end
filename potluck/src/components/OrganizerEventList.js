import React from "react";
import { Link } from "react-router-dom";

const OrganizerEventList = (props) => {
  const { item } = props;

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
    </tr>
  );
};

export default OrganizerEventList;
