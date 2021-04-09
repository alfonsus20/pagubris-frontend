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
import { motion } from "framer-motion";
import NavList from "./navbar/NavList";
import { MENU_LIST as list } from "../utils/constants";
import { toggleSidebar } from "../actions/sidebarActions";
import { logout } from "../actions/userActions";
const Sidebar = ({ mobile }) => {
  const { pathname } = useLocation();
  const { userInfo, loading } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const { open, loading: loadingSidebar } = useSelector(
    (state) => state.sidebar
  );

  const location = useLocation();

  const exception =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";


  const variants = {
    hidden: {
      left: "-100%",
      opacity: 0,
    },
    visible: {
      left: "0",
      opacity: 1,
    },
  };

  useEffect(() => {
    if (userInfo && !userInfo.name) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userInfo]);

  if (exception && !mobile) {
    return null;
  }

  if (exception && mobile) {
    return (
      <motion.div
        variants={variants}
        animate={loadingSidebar || !open ? "hidden" : "visible"}
        className={`fixed z-20 w-full xs:w-100 md:mt-24 px-8 overflow-y-scroll h-auto top-0 bottom-0 bg-white lg:block sidebar`}
      >
        <h3 className="text-xl font-bold mt-8">Menu</h3>
        <ul>
          {list[0].map((x, id) => {
            if (x.name === "Logout") {
              return (
                <li
                  className="w-full p-2 my-4 rounded-r-full font-semibold"
                  style={{ color: "#606060" }}
                >
                  <Link
                    onClick={() => {
                      dispatch(logout());
                      dispatch(toggleSidebar());
                    }}
                    className="flex flex-row items-center"
                  >
                    <div className="w-2/12">
                      <i className={x.icon}></i>
                    </div>
                    <div className="w-10/12">{x.name}</div>
                  </Link>
                </li>
              );
            }
            return (
              <li
                className="w-full p-2 my-4 rounded-r-full font-semibold"
                style={{ color: "#606060" }}
              >
                <Link
                  to={x.link}
                  key={id}
                  onClick={() => dispatch(toggleSidebar())}
                  className="flex flex-row items-center"
                >
                  <div className="w-2/12">
                    <i className={x.icon}></i>
                  </div>
                  <div className="w-10/12">{x.name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        variants={variants}
        animate={loadingSidebar || !open ? "hidden" : "visible"}
        className={`fixed z-20 w-full xs:w-100 md:mt-24 px-8 overflow-y-scroll h-auto top-0 bottom-0 bg-white lg:block sidebar`}
      >
        {userInfo && userInfo.name && (
          <>
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
            <div className="mt-8">
              {mobile && (
                <>
                  <h3 className="text-xl font-bold">Menu</h3>
                  <ul>
                    {list[1].map((x, id) => {
                      if (x.name === "Logout") {
                        return (
                          <li
                            className="w-full p-2 my-4 rounded-r-full font-semibold"
                            style={{ color: "#606060" }}
                          >
                            <Link
                              onClick={() => {
                                dispatch(logout());
                                dispatch(toggleSidebar());
                              }}
                              className="flex flex-row items-center"
                            >
                              <div className="w-2/12">
                                <i className={x.icon}></i>
                              </div>
                              <div className="w-10/12">{x.name}</div>
                            </Link>
                          </li>
                        );
                      }
                      return (
                        <li
                          className="w-full p-2 my-4 rounded-r-full font-semibold"
                          style={{ color: "#606060" }}
                        >
                          <Link
                            to={x.link}
                            key={id}
                            onClick={() => dispatch(toggleSidebar())}
                            className="flex flex-row items-center"
                          >
                            <div className="w-2/12">
                              <i className={x.icon}></i>
                            </div>
                            <div className="w-10/12">{x.name}</div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
            <div className="mt-8">
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
          </>
        )}
      </motion.div>
    </>
  );
};

export default Sidebar;
