import React from "react";

const TextArea = ({
  rounded,
  bgColor,
  width,
  height,
  shadow,
  placeholder,
  px,
  py,
  mx,
  my,
  ...rest
}) => {
  return (
    <textarea
      className={`w-${width} h-${height} bg-${bgColor} rounded-${rounded} shadow-${shadow} px-${px} py-${py} mx-${mx} my-${my} resize-none`}
      placeholder={placeholder}
      {...rest}
    ></textarea>
  );
};

TextArea.defaultProps = {
  px: 8,
  py: 4,
  mx: 0,
  my: 0,
};

export default TextArea;
