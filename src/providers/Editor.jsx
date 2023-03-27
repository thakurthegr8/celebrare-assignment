import React, { createContext, useEffect, useState } from "react";

export const EditorContext = createContext(null);

const Editor = (props) => {
  const [image, setImage] = useState(null);
  const [shape, setShape] = useState("none");
  const [result, setResult] = useState(null);
  return (
    <EditorContext.Provider
      {...props}
      value={{ image, setImage, shape, setShape, result, setResult }}
    />
  );
};

export default Editor;
