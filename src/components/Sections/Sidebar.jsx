import { EditorContext } from "@/src/providers/Editor";
import Image from "next/image";
import React, { useContext } from "react";
import Select from "../Utils/Form/Select";
import Col from "../Utils/Layout/Col";
import Row from "../Utils/Layout/Row";
import Typography from "../Utils/Typography";
import { Tab } from "@headlessui/react";
import Button from "../Utils/Button";

const options = [
  { value: "circle", placeholder: "Circle" },
  { value: "heart", placeholder: "Heart" },
  { value: "rSquare", placeholder: "Rounded Square" },
  { value: "rRectangle", placeholder: "Rounded Rectangle" },
];

const Actions = () => {
  const { setShape } = useContext(EditorContext);
  const onSelect = (value) => {
    setShape(value);
  };
  return (
    <Col>
      <Select options={options} onSelect={onSelect} label="Select Shape" />
    </Col>
  );
};
const Preview = () => {
  const { result } = useContext(EditorContext);
 
  const downloadImage = () => {
    var a = document.createElement("a");
    a.href = result;
    a.download = "Image.png";
    a.click();
  };
  return (
    result && (
      <Col className="gap-2">
        <Typography>Preview</Typography>
        <Image
          src={result}
          width={200}
          height={200}
          className="border-2"
        />
        <Button className="border border-2 border-black btn-sm" onClick={downloadImage}>
          Download
        </Button>
      </Col>
    )
  );
};
const tabs = [
  { title: "Actions", Component: Actions },
  { title: "Preview", Component: Preview },
];

const Sidebar = () => {
  return (
    <Col className="flex-1 border-l border-gray-300">
      <Tab.Group>
        <Tab.List as={Row} className="gap-2 p-2">
          {tabs.map((item) => (
            <Tab
              className={({ selected }) =>
                `${
                  selected ? "font-bold" : "font-normal"
                } cursor-pointer hover:bg-gray-200 p-2 rounded-md transition`
              }
              as={Typography}
            >
              {item.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((item) => (
            <Tab.Panel className="p-2">
              <item.Component />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Col>
  );
};

export default Sidebar;
