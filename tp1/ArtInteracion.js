let mov = 0; let mov2 = 0;
let Mover = false; let Mover2 = false;
let Lado; let Lado2;
function Art2(Dibujo){
  if(!Dibujo){ 
for(let x = 0; x < 9; x++){
  for(let y = 0; y < 7; y++){
   if(y < 2){fill(amarrillo1);}
   else if(y == 2){fill(amarrillo2);}
   else if(y == 3){fill(amarrillo3);}
   else if(y == 4){fill(amarrillo4);}
  let LnX = x * 60 - mov2; // linea X movimiento para triangle y rect
  let LnXq = x * 60 - mov; // linea X movimiento para quad
  let LnY = y * 130;
  let LnY2 = 75 - y;
rect(361+LnX,(44-y)+LnY,30,62);
fill(0);
triangle(346+LnX,(13-y)+LnY,346+LnX,LnY2+LnY,362+LnX,LnY2+LnY);
quad(361+LnXq,LnY2+LnY,392+LnXq,LnY2+LnY,407+LnXq,(142-y)+LnY,378+LnXq,(143-y)+LnY);
                         }
                       }
if(Lado == "izq" && Mover){mov += 2; 
 if (mov > 60) {mov = 0;}}
if(Lado == "der" && Mover){mov += -2; 
 if (mov < -60) {mov = 0;}}

if(Lado2 == "izq" && Mover2){mov2 += 2; 
 if (mov2 > 60) {mov2 = 0;}}
if(Lado2 == "der" && Mover2){mov2 += -2; 
 if (mov2 < -60) {mov2 = 0;}}
  
  } else if(Dibujo){mov = 0; mov2 = 0; Mover = false; Mover2 = false;}                  
}
function Interaccion(Dibujo){
  if(!Dibujo){
  for(let y = 0; y < 7; y++){
  if(mouseY > (12+y*130) && mouseY < (75+y*130)){
  Mover2 = true;}
  if(mouseY > (80+y*130) && mouseY < (140+y*130)){
  Mover = true;}
if(mouseY > (75+y*130) && mouseY < (140+y*130)){
  if(Mover){if(mouseX > 600){Lado = "der";}
else if(mouseX < 600){Lado = "izq";}}}

if(mouseY>(12+y*130) && mouseY<(75+y*130)){
  if(Mover2){
if(mouseX>600){Lado2 = "der";} 
else if(mouseX < 600){Lado2 = "izq";}}}
  }}
}
