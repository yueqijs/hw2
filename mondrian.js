function setup() {
  createCanvas(400, 400);
   strokeCap(SQUARE);
}

function draw() {
  background(220);
    noStroke();
  
      // Red square
  fill(255, 0, 0);
  rect(40, 0, 190, 190);
  
      // Yellow square
  fill(255, 255, 0);
  rect(230, 190, 40, 100);
  
        // Red square
  fill(255, 0, 0);
  rect(270, 290, 130, 110);
  
      // Blue square
  fill(0, 0, 255);
  rect(40, 290, 190, 190);
  
   stroke(0);
  strokeWeight(10);
  line(40, 0, 40, 400); // left line  
  line(230, 0, 230, 400); // left line  
  line(0, 290, 400, 290); // left line  

  
  
  strokeWeight(6);
  line(270, 0, 270, 400); // left line  
  line(40, 190, 270, 190); // left line  
  
 
  
  
  
}
