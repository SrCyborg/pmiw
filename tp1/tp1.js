let Arte;
let Pintar;
let amarrillo4;
let amarrillo3;
let amarrillo2;
let amarrillo1;
function preload(){
Arte = loadImage("data/jesus-soto.jpg");
}
function setup(){
amarrillo4 = color(255,158,0); 
amarrillo3 = color(255,166,0);
amarrillo2 = color(255,171,0); 
amarrillo1 = color(253,176,0);
background(255);
createCanvas(800,600);
noStroke();
image(Arte,0,0,400,600);
rectMode(CENTER);
}
function draw(){
Pintar = Comenzar();
background(255);
Art(Pintar);
Art2(Pintar);
image(Arte,0,0,400,600);
}
function mousePressed(){
Interaccion(Pintar);}
