import React, { useEffect } from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import nopic from "../assets/pictures/nopic.jpeg";
import Solution from "../components/Solution";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../actions/userActions";
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { userProfile, loading } = useSelector((state) => state.getUserProfile);
  const { userId } = useParams();
  const rating = (Math.random() + 4).toFixed(2);

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, []);

  return (
    <PageWithSidebar>
      <div className="w-full flex flex-col items-center">
        {!loading && userProfile ? (
          <>
            <img
              src={userProfile.avatar ? userProfile.avatar : nopic}
              alt="foto-profile"
              className="w-40 h-40 rounded-full my-4"
            />
            <p className="text-center font-bold text-xl">{userProfile.name}</p>
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
                  Rate <br /> {rating} <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-light-blue w-full rounded-xl relative px-8">
              <h2 className="text-xl text-center mt-8 mb-4">Solusi</h2>
              <Solution
                image={userProfile.avatar ? userProfile.avatar : nopic}
                content="Caranya seperti ini"
                name={userProfile.name}
                rating = {rating}
              />
            </div>
          </>
        ) : (
          "Loading...."
        )}
      </div>
    </PageWithSidebar>
  );
};

export default ViewProfile;
