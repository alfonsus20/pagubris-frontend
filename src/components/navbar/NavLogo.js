import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../actions/sidebarActions";

const Navlogo = ({ image, imageTitle }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row">
      <Link to="/" className="flex flex-row items-center">
        <img src={image} alt={imageTitle} className="w-16 h-16" />
        <h2 className="text-2xl font-bold ml-8 hidden md:block">pagubris</h2>
      </Link>
      <i
        className="fas fa-bars ml-auto my-auto text-xl block lg:hidden cursor-pointer"
        onClick={() => dispatch(toggleSidebar())}
      ></i>
    </div>
  );
};

export default Navlogo;
