import React, { useState } from "react";

import FoodItem from "./FoodItem";

const AddItemForm = (props) => {
  const { items, eventInfo, setEventInfo, deleteItem } = props;
  const [foodItem, setFoodItem] = useState({
    item_name: "",
    guestBringingItem: "",
  });

  const handleChange = (e) => {
    setFoodItem({
      ...foodItem,
      item_name: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setEventInfo({
      ...eventInfo,
      items: [...items, foodItem],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Add or remove food item to or from the list.</h4>
        </div>

        <div>
          <div>
            <label>Add Food Item</label>
            <input onChange={handleChange} name="items" type="text" />
          </div>
          <div>
            <ul>
              {props.items.map((item, index) => (
                <FoodItem key={index} item={item} deleteItem={deleteItem} />
              ))}
            </ul>
          </div>
        </div>

        <div>
          <input type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
