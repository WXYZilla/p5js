/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

let handPose;
let video;
let hands = [];
let sparkParticles = [];  // ADD THIS

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-4, 4);
    this.vy = random(-4, 4);
    this.life = 1.0;
    this.size = random(4, 12);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.92;
    this.vy *= 0.92;
    this.life -= 0.05;
  }

  draw() {
    let alpha = this.life * 255;
    // Outer purple glow
    noStroke();
    fill(160, 80, 255, alpha * 0.4);
    circle(this.x, this.y, this.size * 2.5);
    // Inner bright core
    fill(220, 160, 255, alpha);
    circle(this.x, this.y, this.size);
    // White hot center
    fill(255, 240, 255, alpha);
    circle(this.x, this.y, this.size * 0.4);
  }
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  /*
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
  */
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

    let thumb  = hand.keypoints[4];   // Thumb tip
    let index  = hand.keypoints[8];   // Index finger tip
    let middle = hand.keypoints[12];  // Middle finger tip

    let d1 = dist(thumb.x, thumb.y, index.x, index.y);
    let d2 = dist(thumb.x, thumb.y, middle.x, middle.y);

    // All three tips must be close together
    if (d1 < 40 && d2 < 40) {
        let cx = (thumb.x + index.x + middle.x) / 3;
        let cy = (thumb.y + index.y + middle.y) / 3;

        // Spawn new particles at the convergence point
        for (let p = 0; p < 6; p++) {
        sparkParticles.push(new Particle(cx, cy));
        }

        // Draw a pulsing core at the center
        let pulse = sin(frameCount * 0.3) * 10 + 20;
        noStroke();
        fill(160, 80, 255, 80);
        circle(cx, cy, pulse * 3);
        fill(200, 120, 255, 160);
        circle(cx, cy, pulse);
    }
  }

// Update and draw all active particles
for (let i = sparkParticles.length - 1; i >= 0; i--) {
  sparkParticles[i].update();
  sparkParticles[i].draw();
  if (sparkParticles[i].life <= 0) {
    sparkParticles.splice(i, 1);  // Remove dead particles
  }
}
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
