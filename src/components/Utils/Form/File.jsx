import React, { useRef } from "react";
import Button from "../Button";

const File = (props) => {
  const fileInputRef = useRef(null);
  const onChange = (e) => {
    e.preventDefault();
    const image = URL.createObjectURL(e.target.files[0]);
    props.onChange(image);
  };
  const handleClick = (e) => {
    fileInputRef.current.click();
  };
  return (
    <>
      <Button className="btn-primary" onClick={handleClick}>
        {props.children}
      </Button>
      <input
        type="file"
        onChange={onChange}
        ref={fileInputRef}
        className="hidden"
        accept={props.extension}
      />
    </>
  );
};

export default File;
