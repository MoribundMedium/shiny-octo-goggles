function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style("display", "block");
  cnv.background(102);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
