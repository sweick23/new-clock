function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);



}



function draw(){
    background(0);
    translate(200, 200);
    
    
    let hr = hour();
    let mn = minute();
    let sc = second();

    let dd = day();
    let mon = month();
    let yr = year();

    fill(255);
    textSize(width/12.5);
    noStroke();
    text(hr % 12 + ':' + mn + ':' + sc, -50, 0 );
    textSize(width/25);
    text(mon + '/' + dd + '/' + yr, -40, 30);


  
rotate(-90);
    strokeWeight(8);
    noFill();
    stroke(255, 100, 150);
    let sec = map(sc, 0, 60, 0 ,360);
    arc(0,0, width/1.35, width/1.35, 0 , sec);

stroke(100, 50, 200);
     let min = map(mn, 0, 60, 0 ,360);
    arc(0,0, width/1.42, width/1.42, 0 , min);
stroke(100, 150, 200);
         let hours = map(hr % 12,  0, 12, 0 ,360);
    arc(0,0, width/1.5, width/1.5, 0 , hours);
}