import React, { useEffect, useState } from "react";
import nopic from "../assets/pictures/nopic.jpeg";
import premium from "../assets/pictures/premium.svg";
import arrow from "../assets/pictures/arrow.svg";
import user from "../assets/pictures/user.svg";
import Button from "./Button";
import CategoryList from "./category/CategoryList";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../actions/userActions";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { userInfo, loading } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && !userInfo.name) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userInfo]);

  return (
    <div className="fixed w-100 mt-24 px-8 overflow-y-scroll top-0 bottom-0 bg-white hidden lg:block">
      <div className="bg-light-blue px-4 py-4 rounded-xl">
        <div className="flex flex-row items-center justify-around ">
          <img src={nopic} className="w-28 h-28 rounded-full" />
          <h3 className="text-xl font-bold ml-4">
            {!loading ? userInfo.name : "Loading..."}
          </h3>
        </div>
        <div className="flex flex-row">
          <div className="w-6/12">
            <img src={premium} className="w-40 h-auto" />
          </div>
          <div className="flex justify-around text-sm text-center w-6/12 items-center">
            <table className="" cellPadding="8px">
              <tbody>
                <tr>
                  <th>Total Bantu</th>
                  <th>Ahli Dalam</th>
                </tr>
                <tr>
                  <td>20 orang</td>
                  <td>Menjahit</td>
                </tr>
                <tr>
                  <th>Mengikuti</th>
                  <th>Diikuti</th>
                </tr>
                <tr>
                  <td>18 orang</td>
                  <td>5 orang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {pathname !== "/kategori" && (
          <>
            <h3 className="text-xl font-bold">Kategori</h3>
            <CategoryList />
            <div className="text-center hover:underline">
              <Link to="/kategori">Lihat kategori lainnya ...</Link>
            </div>
          </>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Orang Ahli</h3>
        <div>
          <Button
            text="Ateng | Tech"
            bgColor="semi-gray"
            rounded="full"
            color="white"
            additional="my-2 w-60 justify-between"
            leftIcon={user}
            rightIcon={arrow}
          />
          <Button
            text="Teds | Pet"
            bgColor="semi-gray"
            rounded="full"
            color="white"
            additional="my-2 w-60 justify-between"
            leftIcon={user}
            rightIcon={arrow}
          />
          <Button
            text="Markus | DIY"
            bgColor="semi-gray"
            rounded="full"
            color="white"
            additional="my-2 w-60 justify-between"
            leftIcon={user}
            rightIcon={arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
