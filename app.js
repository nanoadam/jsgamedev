const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");

// Fill Color - Will Continue for the Rest of Document
ctx.fillStyle = "green";

/* 
!! The Grid
fillRect(x, y, width, height) - Color Filled
strokeRect(x, y, width, height) - Border Rect
clearRect(x, y, width, height) - Transparent 
*/

//** */ Three Types of Filling
ctx.strokeRect(20, 20, 20, 20);
ctx.fillRect(40, 40, 40, 20);
ctx.clearRect(5, 5, 5, 5);

//!! Cutting a Square from Inside
ctx.fillRect(100, 100, 20, 20);
ctx.clearRect(100, 100, 5, 5);
