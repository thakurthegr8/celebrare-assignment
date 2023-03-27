import React, {
  createContext,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
const DragAndDrop = (props) => {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    ref.current.addEventListener("dragover", handleDragOver);
    ref.current.addEventListener("drop", handleDrop);

    return () => {
      ref.current.removeEventListener("dragover", handleDragOver);
      ref.current.removeEventListener("drop", handleDrop);
    };
  }, []);
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;

    if (files && files.length) {
      props.onChange(URL.createObjectURL(files[0]));
    }
  };
  return <div ref={ref}>{props.children}</div>;
};

export default DragAndDrop;
