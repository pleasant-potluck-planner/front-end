import React from "react";
import OrganizerEventUpdate from "./OrganizerEventUpdate";
import GuestEventUpdate from "./GuestEventUpdate";

const MyPotlucks = () => {
  return (
    <>
      <div>
        <OrganizerEventUpdate />
      </div>
      <div>
        <GuestEventUpdate />
      </div>
    </>
  );
};

export default MyPotlucks;
