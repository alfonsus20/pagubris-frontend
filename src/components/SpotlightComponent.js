import React from "react";
import Button from "./Button";

const SpotlightComponent = ({ image, name, content }) => {
  return (
    <div className="flex flex-col md:flex-row w-full shadow-xl rounded-xl py-6 px-8 my-4">
      <div className="w-full lg:w-6/12 flex items-center">
        <img src={image} alt="Foto Lisa" className="w-80 m-auto" />
      </div>
      <div className="w-full lg:w-6/12 text-justify flex flex-col justify-between">
        <h4 className="text-xl font-bold mt-4 lg:mt-0">{name}</h4>
        <p className="my-4 lg:my-4 text-md">{content}</p>
        <span><strong>Keahlian:</strong> Menjahit, kerajinan tangan</span>
        <div className="flex space-x-4 ">
          <Button text="Donasi" bgColor="purple" color="white" px={4} py={2} />
          <Button
            text="Ikuti"
            bgColor="semi-gray"
            color="white"
            px={4}
            py={2}
          />
        </div>
      </div>
    </div>
  );
};

export default SpotlightComponent;
