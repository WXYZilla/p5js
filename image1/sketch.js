let img;

function preload() {
    img = loadImage('assets/sazabi_wallpaper.jpg');
}

function setup() {
    createCanvas(2000,2000);
}

function draw() {
    background(220);
    image(img,0,0);
}