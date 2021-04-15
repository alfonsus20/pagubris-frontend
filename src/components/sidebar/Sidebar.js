import React, { useEffect } from "react";
import nopic from "../../assets/pictures/nopic.jpeg";
import arrow from "../../assets/pictures/arrow.svg";
import user from "../../assets/pictures/user.svg";
import Button from "../Button";
import CategoryList from "../category/CategoryList";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../actions/userActions";
import { motion } from "framer-motion";
import { MENU_LIST } from "../../utils/constants";
import { logout } from "../../actions/userActions";
import SidebarMenu from "./SidebarMenu";
import SyncLoader from "react-spinners/SyncLoader";

const Sidebar = ({ mobile }) => {
  const { pathname } = useLocation();
  const { userData, loading, isAuthenticated } = useSelector(
    (state) => state.userInfo
  );
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
      left: "auto",
      opacity: 1,
    },
  };

  useEffect(() => {
    if (userData && !userData.name && isAuthenticated) {
      dispatch(getUserInfo());
    }
  }, [dispatch, userData, isAuthenticated]);

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
        <SidebarMenu list={MENU_LIST[0]} />
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
        {userData && userData.name && (
          <>
            <div className="bg-light-blue px-4 py-4 rounded-xl">
              <div className="flex flex-row items-center justify-around ">
                <div className='w-1/2 grid place-items-center'> 
                  <img src={nopic} className="w-28 h-28 rounded-full" />
                </div>
                <div className='w-1/2 grid place-items-center'>
                  <h3 className="text-xl font-bold">
                    {!loading ? userData.name : <SyncLoader color = "#7868E6"  size = {10}/>}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row">
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
                <div className="w-6/12 grid place-items-center">
                  <Button
                    text="Edit Profile"
                    bgColor="purple"
                    px={4}
                    py={2}
                    color="white"
                    link="/edit-profil"
                  />
                  <Button
                    text="Logout"
                    bgColor="red-500"
                    px={4}
                    py={2}
                    color="white"
                    onClick={() => dispatch(logout())}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              {mobile && (
                <>
                  <SidebarMenu list={MENU_LIST[1]} />
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
