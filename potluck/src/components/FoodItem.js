import React from "react";

const FoodItem = (props) => {
  const handleDelete = (e) => {
    deleteItem(item.id);
  };

  return (
    <li>
      {` ${props.item}`} <span onClick={handleDelete}>x</span>
    </li>
  );
};

export default FoodItem;
