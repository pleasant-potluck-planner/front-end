import React from "react";

const GuestFoodList = (props) => {
  const handleAdd = () => {
    // axios put request to add guest name to items array key/value
  };

  return (
    <li>
      {`${props.item.item} `}
      <span onClick={handleAdd}>
        {props.item.volunteer === props.guestName ? null : "+"}
      </span>
    </li>
  );
};

export default GuestFoodList;
