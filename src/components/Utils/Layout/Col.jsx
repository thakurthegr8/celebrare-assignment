import React from "react";

const Col = (props) => {
  return <div {...props} className={`flex flex-col ${props.className}`}/>;
};

export default Col;
