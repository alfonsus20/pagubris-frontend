import React from "react";

const TextField = ({
  rounded,
  bgColor,
  color,
  iconLeft,
  iconRight,
  placeholder,
  type,
  width,
  px,
  py,
  ...rest
}) => {
  return (
    <div>
      <input
        type={type}
        className={`rounded-${rounded} bg-${bgColor} text-${color} px-${px} py-${py} text-sm my-4 w-${width}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

TextField.defaultProps = {
  px: 4,
  py: 2,
};

export default TextField;
