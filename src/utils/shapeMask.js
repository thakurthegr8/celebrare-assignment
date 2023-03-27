export default {
  circle: (ctx, img, element) => {
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
    return {ctx, img, element}
  },
  heart: (ctx, img, element) => {
    element.x = 0;
    element.y = 0;
    var w = img.width,
      h = img.height;
    var d = Math.min(w, h);
    var k = 120;
    ctx.moveTo(k, k + d / 4);
    ctx.quadraticCurveTo(k, k, k + d / 4, k);
    ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
    ctx.quadraticCurveTo(k + d / 2, k, k + (d * 3) / 4, k);
    ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
    ctx.quadraticCurveTo(k + d, k + d / 2, k + (d * 3) / 4, k + (d * 3) / 4);
    ctx.lineTo(k + d / 2, k + d);
    ctx.lineTo(k + d / 4, k + (d * 3) / 4);
    ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
    ctx.stroke();
    ctx.fill();
  },
  rSquare: (ctx, img, element) => {
    const side = Math.min(img.width, img.height);
    element.height = side;
    element.width = side;
    ctx.rect(0, 0, side, side);
  },
  rRectangle: (ctx, img, element) => {
    element.height = img.height;
    element.width = img.width;
    ctx.rect(0, 0, img.height, img.width);
  },
};
