import DragAndDrop from "@/src/providers/DragAndDrop";
import { EditorContext } from "@/src/providers/Editor";
import React, { useContext } from "react";
import Canvas from "../Elements/Canvas";
import Col from "../Utils/Layout/Col";
import Container from "../Utils/Layout/Container";

const Playground = (props) => {
  const { image, setImage, shape } = useContext(EditorContext);
  const onChange = (file) => {
    setImage(file);
  };
  return (
    <Col className="w-2/3 bg-gray-200 justify-center items-center p-24 ">
      <Col className="h-[400px] w-[400px] border border-gray-300 justify-center">
        <DragAndDrop onChange={onChange}>
          <Canvas imageSrc={image} shape={shape} />
        </DragAndDrop>
      </Col>
    </Col>
  );
};

export default Playground;
