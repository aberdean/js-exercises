const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;

/** Initial x and y coordinates */
let lastX = 0;
let lastY = 0;

/** Keep track of color and line width */
let hue = 0;
let growLine = true;

/**
 * Draw the line as the mouse is moved, changing the color and the width
 * of the line. The color ranges from red through the spectrum until it reaches
 * red again. The width of the line goes from 100 to 0 and back from 0 to 100.
 */
const draw = (e) => {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue += 1;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    growLine = !growLine;
  }

  if (growLine) {
    ctx.lineWidth += 1;
  } else {
    ctx.lineWidth -= 1;
  }
}

/** 
  * When the mouse button is pressed, start drawing and update
  * x and y coordinates.
  */
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

/** As the mouse moves, draw the lines */
canvas.addEventListener('mousemove', draw);
/** 
 * When the mouse button is released or the mouse is out of the canvas,
 * stop drawing.
 */
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
