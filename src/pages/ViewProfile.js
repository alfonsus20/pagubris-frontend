import React, { useEffect } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import fotolisa from "../assets/pictures/marsyalina.svg";
import Solution from "../components/Solution";

const ViewProfile = () => {
  return (
    <PageWithSidebar>
      <div className="w-full flex flex-col items-center">
        <img
          src={fotolisa}
          alt="foto-profile"
          className="w-40 h-40 rounded-full my-4"
        />
        <p className="text-center font-bold text-xl">Lisa Sukmawati</p>
        <div className="flex flex-row text-sm text-center space-x-12 my-4 text-lg">
          Automotif, Peliharaan
        </div>
        <div className="flex flex-row w-10/12 text-center space-x-1 relative top-12 z-10 ">
          <div className="bg-semi-gray rounded-l-lg text-white px-8 py-2 w-1/3 grid place-items-center">
            Ikuti
          </div>
          <div className="bg-semi-gray text-white px-8 py-2 w-1/3 grid place-items-center">
            Pesan
          </div>
          <div className="bg-semi-gray  rounded-r-lg text-white px-8 py-2 w-1/3 grid place-items-center">
            <div>
              Rate <br /> 3,5 <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-light-blue w-full rounded-xl relative px-8">
          <h2 className="text-xl text-center mt-8 mb-4">Solusi</h2>
          <Solution
            image={fotolisa}
            content="fotakm askdmals aksdaksmd aosdamds "
            name = "lasdads"
          />
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default ViewProfile;