//Proyecto RE_Cover, AM by Arctic Monkeys 
// Eduardo Callejas

var x = 0;
var y = 0;
var ampsen;
var amplitud;
function setup(){
createCanvas(600,600);

}

function draw(){
  background(0);
var frec=height/40 //número de ondas en panalla
var posx;
var posy;
for(var i=0;i<=600;i++){
var theta = map(i,0,600,0,4*PI);
 ampsen=1/2*(sin((theta)-PI/2))+1; //la amplitud de las ondas tambien es una funcion de seno
  
amplitud=mouseY/300*ampsen*height/10; // agrega interacción con la posición del mouse

stroke(255);
strokeWeight(3);
if(i>1){ // en i=0 se crea el primer punto, desde i=1 comienzan a dibujarse las lineas

line(posx,posy,i,height/2+amplitud*sin(PI/frec*i+PI/frec*y));}
//point(i,height/2+amplitud*sin(PI/frec*i+PI/frec*y));
posx= i;
posy= height/2+amplitud*sin(PI/frec*(i)+PI/frec*y);
}

y=y+1; //no me acuerdo porque es esto
//dibujarseno();

}

function dibujarseno(){stroke(255);
point(x,height/2+height/2*sin((PI/50)*x))
x=x+1;}
