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
        <div className="flex flex-row my-3 text-yellow-400">
          <span>
            <i
              className={
                rating >= 1
                  ? "fas fa-star"
                  : rating >= 0.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 2
                  ? "fas fa-star"
                  : rating >= 1.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 3
                  ? "fas fa-star"
                  : rating >= 2.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 4
                  ? "fas fa-star"
                  : rating >= 3.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
          <span>
            <i
              className={
                rating >= 5
                  ? "fas fa-star"
                  : rating >= 4.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
        </div>
        <div className="flex flex-row">
          <Tag text="mobil" />
          <Tag text="otomotif" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
