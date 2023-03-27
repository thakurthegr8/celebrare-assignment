import React from "react";

const Container = (props) => {
  return <div {...props} className={`mx-auto container w-full block ${props.className}`}/>;
};

export default Container;
