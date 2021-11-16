function prelaod(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 90,100, 400, 300);
    circle(50, 50, 80);
    circle(540, 50, 80);
    rect(85, 30, 420, 40);
    circle(50, 440, 80);
    circle(540, 440, 80);
    rect(85, 420, 420, 40);
    rect(30, 80, 40, 330);
    rect(520, 80, 40, 330);
}

function take_snapshot(){
    save('picture.png');
}

