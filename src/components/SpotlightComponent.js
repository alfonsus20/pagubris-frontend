import React from "react";
import Button from "./Button";
import nopic from "../assets/pictures/nopic.jpeg";

const SpotlightComponent = ({ image, name, bio }) => {
  const keahlian = [
    "Menjahit",
    "Service Komputer",
    "Kerajinan Tangan",
    "Peliharaan",
    "Otomotif",
    "Berkebun",
    "Memasak",
    "Gadget",
  ];

  const id1 = Math.floor(Math.random() * 8);
  const id2 = Math.floor(Math.random() * 8);

  return (
    <div className="flex flex-col md:flex-row w-full shadow-xl rounded-xl py-6 px-8 my-4">
      <div className="w-full lg:w-6/12 flex items-center">
        <img
          src={image ? image : nopic}
          alt="Foto Lisa"
          className="w-40 m-auto"
        />
      </div>
      <div className="w-full lg:w-6/12 text-justify flex flex-col justify-between">
        <h4 className="text-xl font-bold mt-4 lg:mt-0">{name}</h4>
        <p className="my-2 lg:my-2 text-md">{bio}</p>
        <span>
          <strong>Keahlian:</strong> {keahlian[id1]}, {keahlian[id2]}
        </span>
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
