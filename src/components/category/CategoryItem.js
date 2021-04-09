import React from "react";
import {useLocation} from "react-router-dom";

const CategoryItem = ({ image, title, bgColor }) => {
  const {pathname} = useLocation();

  return (
    <div className={`w-auto ${pathname === '/kategori' ? 'sm:w-64' : 'sm:w-1/2'} p-2 mx-auto sm:mx-0`}>
      <div
        className={`p-4 rounded-2xl flex flex-col sm:flex-${pathname === '/kategori' ? 'row': 'col'} items-center justify-center text-center text-white text-lg`}
        style={{ backgroundColor: bgColor }}
      >
        <img src={image} alt={title} className="w-24 h-24" />
        <h4 className="w-24 sm:w-48">{title}</h4>
      </div>
    </div>
  );
};

export default CategoryItem;