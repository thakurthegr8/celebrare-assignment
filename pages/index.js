import Canvas from "@/src/components/Elements/Canvas";
import Navbar from "@/src/components/Sections/Navbar";
import Playground from "@/src/components/Sections/Playground";
import Sidebar from "@/src/components/Sections/Sidebar";
import Col from "@/src/components/Utils/Layout/Col";
import Container from "@/src/components/Utils/Layout/Container";
import Row from "@/src/components/Utils/Layout/Row";
import { paths } from "@/src/constants/imageClipPaths";
import Editor from "@/src/providers/Editor";
import React, { useRef, useState } from "react";

const options = [
  { value: "circle", placeholder: "Circle" },
  { value: "heart", placeholder: "Heart" },
  { value: "rSquare", placeholder: "Rounded Square" },
  { value: "rRectangle", placeholder: "Rounded Rectangle" },
];

export default function Home() {
  return (
    <Editor>
      <Col>
        <Navbar />
        <Row className="h-[92vh] w-full">
          <Playground />
          <Sidebar />
        </Row>
      </Col>
    </Editor>
  );
}
