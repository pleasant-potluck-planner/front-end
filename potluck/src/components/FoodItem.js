import React from "react";

const FoodItem = (props) => {
  const handleDelete = (e) => {
    props.deleteItem(props.item.id);
  };

  return (
    <li>
      {`${props.item.item_name} `} <span onClick={handleDelete}>x</span>
      {props.item.guestBringingItem ? (
        <p>{props.item.guestBringingItem} will bring this.</p>
      ) : null}
    </li>
  );
};

export default FoodItem;
