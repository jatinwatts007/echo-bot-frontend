import React from "react";

const InfoDetails = () => {
  return (
    <div className="flex flex-row gap-x-2 p-5">
      <input
        id="name-input"
        placeholder="Enter Name"
        type="text"
        className="outline-none border-2 border-black p-1 rounded-md"
        required
      />
      <input
        id="email-input"
        placeholder="Enter Email"
        type="email"
        className="outline-none border-2 border-black p-1 rounded-md"
        required
      />
    </div>
  );
};

export default InfoDetails;
