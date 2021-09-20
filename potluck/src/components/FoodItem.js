import React from "react";

const FoodItem = (props) => {
  const handleDelete = (e) => {
    props.deleteItem(props.item.id);
  };

  return (
    <li>
      {`${props.item.item} `} <span onClick={handleDelete}>x</span>
      {props.item.volunteer ? (
        <p>{props.item.volunteer} will bring this.</p>
      ) : null}
    </li>
  );
};

export default FoodItem;
