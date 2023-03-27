import { EditorContext } from "@/src/providers/Editor";
import React, { useContext } from "react";
import File from "../Utils/Form/File";
import Col from "../Utils/Layout/Col";
import Row from "../Utils/Layout/Row";
import Typography from "../Utils/Typography";

const Navbar = () => {
  const { setImage } = useContext(EditorContext);
  const onChange = (imageData) => {
    setImage(imageData);
  };
  return (
    <Row className="items-center p-2 gap-2 border-b border-gray-300">
      <Typography.Heading className="font-bold">
        Image Editor
      </Typography.Heading>
      <Row>
        <File onChange={onChange} extension="image/jpg, image/png">
          File
        </File>
      </Row>
    </Row>
  );
};

export default Navbar;
