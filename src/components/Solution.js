import React from "react";
import Tag from "./Tag";

const Solution = ({ image, name, content, rating }) => {
  return (
    <div className="flex flex-row my-6 bg-white shadow-xl rounded-md py-6 px-4">
      <div className="w-3/12 flex flex-col justify-center items-center">
        <img
          src={image}
          alt={"creator"}
          className="w-16 h-16 sm:w-20 h-20 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-between ml-8 lg:ml-0 text-lg rounded-lg">
        <strong className="text-lg">{name}</strong>
        <div>{content} </div>
        <div className="flex flex-row my-3">
          <i className="fas fa-star mr-1"></i>
          <i className="fas fa-star-half-alt mr-1"></i>
        </div>
        <div className="flex flex-row">
          <Tag text="rumah" />
          <Tag text="rumah" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
