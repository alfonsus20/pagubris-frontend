import React from "react";

const ChatBox = ({ name, content, receiver, image }) => {
  if (receiver) {
    return (
      <div className="text-justify w-9/12 md:w-128 relative ml-auto p-4 bg-purple rounded-l-lg rounded-tr-lg text-white my-4">
        <p>{content}</p>
      </div>
    );
  }
  return (
    <div className="text-justify w-9/12 md:w-128 relative p-4 bg-semi-purple rounded-r-lg rounded-tl-lg text-white my-4">
      <p>{content}</p>
    </div>
  );
};

export default ChatBox;
