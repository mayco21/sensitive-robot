let x;
let bgColor = [239, 235, 187];
let a = 0;
let eyebrowColor = [251, 241, 115];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(bgColor);
  x = random(5);

  // head
  fill(157, 118, 180);
  rect(80, 90, 238, 218);

  // left antenna
  stroke(0); 
  line(64, 150, 64, 78);

  // right antenna
  line(335, 78, 335, 150);

  // Change color based on mouse position Black for right side,White for left side
  let antennaColor;
  if (mouseX > width / 2) {
    antennaColor = [0, 0, 0]; 
  } else {
    antennaColor = [255, 255, 255]; 
  }

  // left circle antenna
  fill(antennaColor);
  ellipse(64, random(71, 73), 18, 18);

  // right circle antenna
  fill(antennaColor);
  ellipse(335, random(71, 73), 18, 18);

  // left eye
  fill(0, 0, 0);
  ellipse(126, 240, 70, 70);

  // right eye
  fill(0, 0, 0);
  ellipse(273, 240, 70, 70);

  // left eye light
  fill(255, 255, 255);
  ellipse(random(106, 108), 226, 12, 12);
  ellipse(random(101, 103), 240, 8, 8);

  // right eye light
  fill(255, 255, 255);
  ellipse(random(290, 292), 227, 12, 12);
  ellipse(random(296, 298), 240, 8, 8);

  // nose
  fill(a, 0, 0);
  triangle(188, 271, 200, 251, 211, 271);

  // left eyebrow
  fill(eyebrowColor);
  rect(110, random(180, 182), 39, 12);

  // right eyebrow
  fill(eyebrowColor);
  rect(250, random(180, 182), 39, 12);

  // left ear
  fill(75, 44, 96);
  rect(48, 150, 32, 62);

  // right ear
  fill(75, 44, 96);
  rect(318, 150, 32, 62);

  // mouth
  fill(255, 255, 255);
  rect(random(161, 163), 285, 77, 13);

}

function mousePressed() {
  a = random(255);
}

// צבע רנדומלי לרקע
function keyPressed() {
  if (key === 'A' || key === 'a') {
    bgColor = [random(255), random(255), random(255)];
    
    
    // צבע רנדומלי לגבות 
        }
  if (key === 'B' || key === 'b') {
    eyebrowColor = [random(255), random(255), random(255)]; 
  }
}

