import React from "react";
import { useParams } from "react-router-dom";

const FoodItem = (props) => {
  const { id } = useParams();

  const handleDelete = (e) => {
    props.deleteItem(id);
  };

  return (
    <tr>
      <td>{props.item.item_name}</td>
      <td>{props.item.guestBringingItem}</td>
      <td>
        <span onClick={handleDelete}></span>
        {props.item.guestBringingItem ? null : "x"}
      </td>
    </tr>
  );
};

export default FoodItem;
