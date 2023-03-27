import { DragAndDropContext } from "@/src/providers/DragAndDrop";
import { EditorContext } from "@/src/providers/Editor";
import React, { useContext, useEffect, useRef, useState } from "react";

const createSquare = (ctx, img, element) => {
  const side = Math.max(img.height, img.width);
  element.height = side;
  element.width = side;
  ctx.rect(0, 0, side, side);
  ctx.clip();
  ctx.drawImage(img, 0, 0);
};
const createCircle = (ctx, img, element) => {
  element.height = img.height;
  element.width = img.height;
  ctx.beginPath();
  ctx.arc(
    element.height / 2,
    element.height / 2,
    element.height / 2,
    0,
    2 * Math.PI
  );
  ctx.clip();
  ctx.drawImage(img, 0, 0);
};

const createHeart = (ctx, img, element) => {
  element.x = 0;
  element.y = 0;
  var w = img.width,
    h = img.height;
  var d = Math.min(w, h);
  var k = 0;
  ctx.moveTo(k, k + d / 4);
  ctx.quadraticCurveTo(k, k, k + d / 4, k);
  ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
  ctx.quadraticCurveTo(k + d / 2, k, k + (d * 3) / 4, k);
  ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
  ctx.quadraticCurveTo(k + d, k + d / 2, k + (d * 3) / 4, k + (d * 3) / 4);
  ctx.lineTo(k + d / 2, k + d);
  ctx.lineTo(k + d / 4, k + (d * 3) / 4);
  ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
  // ctx.stroke();
  ctx.fill();
  ctx.clip();
  ctx.drawImage(img, 0, 0);
};

const createRoundedSquare = (ctx, img, element) => {
  const side = Math.min(img.width, img.height);
  element.height = side;
  element.width = side;
  ctx.roundRect(0, 0, side, side,100);
  ctx.clip();
  ctx.drawImage(img, 0, 0);
};
const createRoundedRectangle = (ctx, img, element) => {
  const length = Math.max(img.height, img.width);
  const breadth = Math.min(img.height, img.width);
  element.height = breadth;
  element.width = length;
  ctx.roundRect(0, 0, length, breadth,100);
  ctx.clip();
  ctx.drawImage(img, 0, 0);
};

const Canvas = (props) => {
  const ref = useRef(null);
  const [ctx, setContext] = useState(null);
  const { setResult } = useContext(EditorContext);
  useEffect(() => {
    if (ref) {
      console.log(ref.current.parentNode);
    }
  }, [ref]);
  useEffect(() => {
    setContext(ref.current.getContext("2d"));
  }, [ref]);
  useEffect(() => {
    const img = new Image();
    img.src = props.imageSrc;
    img.onload = () => {
      if (ctx) {
        ctx.reset();
        if (props.shape == "none") {
          createSquare(ctx, img, ref.current);
        }
        if (props.shape === "circle") {
          createCircle(ctx, img, ref.current);
        } else if (props.shape === "heart") {
          createHeart(ctx, img, ref.current);
        } else if (props.shape === "rSquare") {
          createRoundedSquare(ctx, img, ref.current);
        } else if (props.shape === "rRectangle") {
          createRoundedRectangle(ctx, img, ref.current);
        }
        setResult(ref.current.toDataURL());
      }
    };
  }, [props]);
  return (
    <>
      <canvas id="c" ref={ref}></canvas>
    </>
  );
};

export default Canvas;
