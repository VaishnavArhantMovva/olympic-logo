canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.LineWidth = 4;
ctx.rect(150,143,410,200)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.LineWidth = 30;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.LineWidth = 30;
ctx.arc(340,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.LineWidth = 30;
ctx.arc(430,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.LineWidth = 30;
ctx.arc(295,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.LineWidth = 30;
ctx.arc(385,250,40,0,2 * Math.PI);
ctx.stroke();
