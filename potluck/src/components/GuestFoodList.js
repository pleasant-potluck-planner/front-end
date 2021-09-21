import React from "react";

const GuestFoodList = (props) => {
  const handleAdd = () => {
    // axios put request to add guest name to items array key/value
  };

  return (
    <li>
      {`${props.food} `} <span onClick={handleAdd}>+</span>
    </li>
  );
};

export default GuestFoodList;
