import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="bg-gray rounded-full text-center py-1 px-2 text-sm m-1">#{text}</div>
  );
};

export default Tag;
