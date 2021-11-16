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
    image(video, 70,70, 450, 350);
    fill("#f5f502");
    stroke("#f5a802");
    rect(85, 30, 420, 40);
    rect(85, 420, 420, 40);
    rect(30, 80, 40, 330);
    rect(520, 80, 40, 330);
    fill("#b103fc");
    stroke("#0335fc");
    circle(50, 50, 80);
    circle(540, 50, 80);
    circle(50, 440, 80);
    circle(540, 440, 80);
}

function take_snapshot(){
    save('picture.png');
}

