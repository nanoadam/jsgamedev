const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

// ** Drawing Paths
// Triangle
ctx.beginPath();
ctx.lineTo(30, 30);
ctx.lineTo(100, 25);
ctx.lineTo(100, 50);
ctx.fill();

// ** Another Path = Square
ctx.beginPath();
ctx.lineTo(20, 30);
ctx.lineTo(20, 40);
ctx.lineTo(10, 40);
ctx.lineTo(10, 30);
ctx.lineTo(20, 30);
ctx.stroke();

// ** Another Path = Square
ctx.beginPath();
ctx.lineTo(40, 50);
ctx.lineTo(40, 60);
ctx.lineTo(30, 60);
ctx.lineTo(30, 50);
ctx.fill();

// ** Another Path = Line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(10, 50);
ctx.stroke();
