function setup() {
  
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 50;

var ballX2=370;
var ballSpeed2=50;


function draw() {
  
  background(220);
  
  ellipse(ballX,mouseX,30);
  ellipse(ballX2,mouseY,30);
  
  ballX=ballX+ballSpeed;
  ballX2=ballX2+ballSpeed2;
  
  
  if(ballX>=400) {ballSpeed=-50;}
  
  if(ballX<=0) {ballSpeed=50;}
  
  if(ballX2>=400) {ballSpeed2=-50;}
  
  if(ballX2<=0) {ballSpeed2=50;}
}
