// Darkside of the Moon - Proyecto RE_COVER
// Eduardo Callejas Marzo 2018
function setup() {
  createCanvas(500, 500);
	//red, orange, yellow, green, blue, indigo, violet (colores del arcoiris)
	//crea primer "fountain" con colores del arcoiris
		var t =
		 {
				 name: "test",
				 colors: ["red","orange","yellow","green","blue","indigo","violet"],
				 lifetime: 180,
				 angle: [0,30],
				 size: [2,15],
				 speedx: 0.9,
				 x: 0.553,
				 y: 0.355,
				 acceleration: 1,
				 shape: "ellipse2"
		 };
		 of = new Fountain(null, t);
//segunda fuente, reflejo de la luz dentro del prisma
		 var u =
 		 {
 				 name: "test",
 				 colors: ["white","white","grey","grey","black"],
 				 lifetime: 60,
 				 angle: [-10,15],
 				 size: [1,3],
 				 speedx: 0.1,
 				 x: 0.417,
 				 y: 0.355,
 				 acceleration: 0.1
 		 };
 		 uf = new Fountain(null, u);


}

function draw() {
	background(0);
arcoiris(); //dibuja arcoiris
	stroke(255);

	fill(0);
	strokeWeight(3);
		line(0, height*(0.355+0.1563),height*(1/3+1/12),height*0.355); // Haz de luz 
		strokeWeight(1);
  triangle(2/3*height,1/2*height,1/3*height,1/2*height, 1/2*height, height*(1/2-1/6*sqrt(3))); //prisma
reflejo(); //crea reflejo dentro del prisma

	



}
function arcoiris(){

  of.Draw();
  of.Create();
  of.Step();
}

function reflejo(){
uf.Draw();
	uf.Create();
	uf.Step();


}
