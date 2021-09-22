import React from "react";
import { Link } from "react-router-dom";

const OrganizerEventList = (props) => {
  const { item, key } = props;
  return (
    <tr>
      <td>{item.potluck_name}</td>
      <td>{item.potluck_date}</td>
      <td>{item.potluck_time}</td>
      <td>{item.potluck_location}</td>
      <td>
        <Link to={`/potluck/orgupdate/${key}`}>
          <input type="button" value="Update" />
        </Link>
      </td>
    </tr>
  );
};

export default OrganizerEventList;
