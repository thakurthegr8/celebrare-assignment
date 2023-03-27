import React, { useEffect, useRef, useState } from "react";

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
};

const createRoundedSquare = (ctx, img, element) => {
  const side = Math.min(img.width, img.height);
  element.height = side;
  element.width = side;
  ctx.rect(0, 0, side, side);
  ctx.clip();
};
const createRoundedRectangle = (ctx, img, element) => {
  element.height = img.height;
  element.width = img.width;
  ctx.rect(0, 0, img.height, img.width);
  ctx.clip();
};

const Canvas = (props) => {
  const ref = useRef(null);
  const [ctx, setContext] = useState(null);
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
          ref.current.height = img.height;
          ref.current.width = img.width;
        }
        if (props.shape === "circle") {
          createCircle(ctx, img, ref.current);
        } else if (props.shape === "heart") {
          createHeart(ctx, img, ref.current);
        }
        else if (props.shape === "rSquare") {
          createRoundedSquare(ctx, img, ref.current);
        } else if (props.shape === "rRectangle") {
          createRoundedRectangle(ctx, img, ref.current);
        }
        ctx.drawImage(img, 0, 0);
      }
    };
  }, [props]);
  return <canvas id="c" ref={ref}></canvas>;
};

export default Canvas;
