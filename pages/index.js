import Canvas from "@/src/components/Elements/Canvas";
import Col from "@/src/components/Utils/Layout/Col";
import Container from "@/src/components/Utils/Layout/Container";
import { paths } from "@/src/constants/imageClipPaths";
import React, { useRef, useState } from "react";

const options = [
  { value: "circle", placeholder: "Circle" },
  { value: "heart", placeholder: "Heart" },
  { value: "rSquare", placeholder: "Rounded Square" },
  { value: "rRectangle", placeholder: "Rounded Rectangle" },
];

export default function Home() {
  const [imageBlob, setImageBlob] = useState(null);
  const [shape, setShape] = useState("none");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    e.preventDefault();
    const image = URL.createObjectURL(e.target.files[0]);
    setImageBlob(image);
  };
  return (
    <>
      <select onChange={(e) => setShape(e.target.value)}>
        <option value="none">Select Shape</option>
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.placeholder}
          </option>
        ))}
      </select>
      <form onSubmit={onSubmit} onChange={onChange}>
        <input type="file" accept="image/jpg, image/png" name="image" />
        <Container>
          <Col className="max-w-xl">
            <Canvas
              imageSrc={imageBlob}
              shape={shape}
            />
          </Col>
        </Container>
      </form>
    </>
  );
}
