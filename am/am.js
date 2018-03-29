//Proyecto RE_Cover, AM by Arctic Monkeys 
// Eduardo Callejas

// RE_Cover AM by Arctic Monkeys

var x = 0;
var y = 0;
var ampsen;
var amplitud;
function setup(){
var canvas = createCanvas(600,600);
canvas.parent('sketch-holder');


}

function draw(){
  background(0);
var frec=height/40
var posx;
var posy;
for(var i=0;i<=600;i++){
var theta = map(i,0,600,0,4*PI);
 ampsen=1/2*(sin((theta)-PI/2))+1;
amplitud=mouseY/300*ampsen*height/10;

stroke(255);
strokeWeight(6);
if(i>1){

line(posx,posy,i,height/2+amplitud*sin(PI/frec*i+PI/frec*y));}
//point(i,height/2+amplitud*sin(PI/frec*i+PI/frec*y));
posx= i;
posy= height/2+amplitud*sin(PI/frec*(i)+PI/frec*y);

}

y=y+1;
//dibujarseno();

}

function dibujarseno(){stroke(255);
point(x,height/2+height/2*sin((PI/50)*x))
x=x+1;}
