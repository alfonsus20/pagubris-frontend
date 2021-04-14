import React from "react";

const Container = ({
  center,
  children,
  padding,
  direction,
  additional,
  id,
  start
}) => {
  return (
    <div
      className={`flex flex-col flex-wrap lg:flex-${direction}  ${
        center && "justify-center items-center"
      } relative ${additional} ${start && 'mt-24'} `}
      style={{ padding }}
      id={id}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  padding: "6% 7%",
  direction: "row",
};

export default Container;
