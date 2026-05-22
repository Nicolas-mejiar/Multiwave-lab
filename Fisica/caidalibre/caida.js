let canvas = document.getElementById("simulacion");
let ctx = canvas.getContext("2d");

let altura;
let g;
let t = 0;

let animacion;

function iniciar(){

altura = parseFloat(document.getElementById("altura").value);
g = parseFloat(document.getElementById("gravedad").value);

t = 0;

animacion = setInterval(simular,20);

}

function simular(){

t += 0.02;

let y = altura - (0.5 * g * t * t);
let v = g * t;

document.getElementById("tiempo").innerText = t.toFixed(2);
document.getElementById("velocidad").innerText = v.toFixed(2);

ctx.clearRect(0,0,400,500);

let posicion = 500 - y*3;

ctx.beginPath();
ctx.arc(200,posicion,10,0,Math.PI*2);
ctx.fill();

if(y <= 0){
clearInterval(animacion);
}

}

function reiniciar(){

clearInterval(animacion);
ctx.clearRect(0,0,400,500);
t = 0;

}