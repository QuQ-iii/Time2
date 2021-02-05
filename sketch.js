var title;
var  india_button, america_button, dubai_button, australia_button;
var hr, min, sec;
var time;
var timeZone = "INDIA";
var tick, alarm;
var convert = "INDIA";

function preload() {
  alarm = loadSound("alarm-clock-01.mp3");
  tick = loadSound("clock-ticking-4.mp3");
}
function setup() {
  createCanvas(400,500);
  tick.loop();
  tick.setVolume(1.0);

  title = createElement("h1");

  india_button = createButton("INDIA");
  india_button.position(80,100);
  america_button = createButton("AMERICA");
  america_button.position(155,100);
  dubai_button = createButton("DUBAI");
  dubai_button.position(255,100);
  australia_button = createButton("AUSTRALIA");
  australia_button.position(330,100);
}

function draw() {
  background("black"); 

  india_button.mousePressed(()=>{
    convert = "INDIA";
    timeZone = "INDIA";
  });
  america_button.mousePressed(()=>{
    convert = "AMERICA";
    timeZone = "AMERICA";
  });
  dubai_button.mousePressed(()=>{
    convert = "DUBAI";
    timeZone = "DUBAI";
  });
  australia_button.mousePressed(()=>{
    convert = "AUSTRALIA";
    timeZone = "AUSTRALIA";
  });

  if(timeZone === "INDIA"){
    india();
    title.position(140,0);
  }
  if(timeZone === "DUBAI"){
    dubai();
    title.position(140,0);
  }
  if(timeZone === "AMERICA"){
    america();
    title.position(120,0);
  }
  if(timeZone === "AUSTRALIA"){
    australia();
    title.position(100,0);
  }
  
  title.html("TIME : " + convert);

  hr = hour();
  min = minute();
  sec = second();

  //alarm at 12 for 15 sec
  if(hr === 12
    && min === 0
    && sec <= 15){
    alarm.play();
  }else{
    alarm.stop();
  }

  angleMode(DEGREES);
}

async function india() {
  if(hr < 12 
  || hr === 24){
    time = "AM";
  }else{
    time = "PM";
  }

  fill("white");
  textSize(50)
  if(hr % 12 === 0){
    text(12 + " : " + min + " : " + sec, 40,450);
  }else{
    text(hr % 12 + " : " + min + " : " + sec, 40,450);
  }
  text(time, 300,450);

  var secAngle = map(sec - 15, 0,60,0,360);
  var minAngle = map(min - 15, 0,60,0,360);
  var hrAngle = map((hr % 12) - 15, 0,12,0,360);

  //Second hand
  push();
  translate(200,220);
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,110,0);  
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(7);
  arc(200,220,300,300,270, secAngle);
  pop();

  //Minute hand
  push();
  translate(200,220);
  rotate(minAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,80,0);  
  pop();

  push();
  noFill();
  stroke("lime");
  strokeWeight(7);
  arc(200,220,280,280,270, minAngle);
  pop();

  //Hour Hand
  push();
  translate(200,220);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);  
  pop();

  push();
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(200,220,260,260,270, hrAngle);
  pop();
}

async function dubai() {

  var dubai_hr = hr-1;
  var dubai_min = min - 30;

  if(dubai_min < 0){
    dubai_hr = dubai_hr - 1;
    dubai_min = 60 - (dubai_min * -1);
  }
  if(dubai_hr < 12
    || dubai_hr === 24){
    time = "AM";
  }else{
    time = "PM";
  }

  fill("white");
  textSize(50)
  if(dubai_hr % 12 === 0){
    text(12 + " : " + dubai_min + " : " + sec, 40,450);
  }else{
    text(dubai_hr % 12 + " : " + dubai_min + " : " + sec, 40,450);
  }
  text(time, 300,450);

  var secAngle = map(sec - 15, 0,60,0,360);
  var minAngle = map((min - 15) - 30, 0,60,0,360);
  var hrAngle = map((dubai_hr % 12) - 15, 0,12,0,360);

  //Second hand
  push();
  translate(200,220);
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,110,0);  
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(7);
  arc(200,220,300,300,270, secAngle);
  pop();

  //Minute hand
  push();
  translate(200,220);
  rotate(minAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,80,0);  
  pop();

  push();
  noFill();
  stroke("lime");
  strokeWeight(7);
  arc(200,220,280,280,270, minAngle);
  pop();

  //Hour Hand
  push();
  translate(200,220);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);  
  pop();

  push();
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(200,220,260,260,270, hrAngle);
  pop();
}

async function america() {
  var america_hr = hr - 10;
  var america_min = min - 30;

  if(america_min < 0){
    america_hr = america_hr - 1;
    america_min = 60 - (america_min * -1);
  }

  if(america_hr < 12
    || america_hr === 24){
    time = "AM";
  }else{
    time = "PM";
  }

  fill("white");
  textSize(50)
  if(america_hr % 12 === 0){
    text(12 + " : " + america_min + " : " + sec, 40,450);
  }else{
    text(america_hr % 12 + " : " + america_min + " : " + sec, 40,450);
  }
  text(time, 300,450);
  
  var secAngle = map(sec - 15, 0,60,0,360);
  var minAngle = map(america_min - 15, 0,60,0,360);
  var hrAngle = map((america_hr % 12) - 15, 0,12,0,360);

  //Second hand
  push();
  translate(200,220);
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,110,0);  
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(7);
  arc(200,220,300,300,270, secAngle);
  pop();

  //Minute hand
  push();
  translate(200,220);
  rotate(minAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,80,0);  
  pop();

  push();
  noFill();
  stroke("lime");
  strokeWeight(7);
  arc(200,220,280,280,270, minAngle);
  pop();

  //Hour Hand
  push();
  translate(200,220);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);  
  pop();

  push();
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(200,220,260,260,270, hrAngle);
  pop();
}

async function australia() {
  var australia_hr = hr + 5;
  var australia_min = min + 30;

  if(australia_min >= 60){
    australia_hr = australia_hr + 1;
    australia_min = 60 - australia_min;
    if(australia_min < 0){
      australia_min = australia_min * -1;
    }
  }

  if(australia_hr < 12
    || australia_hr === 24){
    time = "AM";
  }else{
    time = "PM";
  }
  
  fill("white");
  textSize(50)
  if(australia_hr % 12 === 0){
    text(12 + " : " + australia_min + " : " + sec, 40,450);
  }else{
    text(australia_hr % 12 + " : " + australia_min + " : " + sec, 40,450);
  }
  text(time, 300,450);

  var secAngle = map(sec - 15, 0,60,0,360);
  var minAngle = map(australia_min - 15, 0,60,0,360);
  var hrAngle = map((australia_hr % 12) - 15, 0,12,0,360);

  //Second hand
  push();
  translate(200,220);
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,110,0);  
  pop();

  push();
  noFill();
  stroke("red");
  strokeWeight(7);
  arc(200,220,300,300,270, secAngle);
  pop();

  //Minute hand
  push();
  translate(200,220);
  rotate(minAngle);
  stroke("lime");
  strokeWeight(7);
  line(0,0,80,0);  
  pop();

  push();
  noFill();
  stroke("lime");
  strokeWeight(7);
  arc(200,220,280,280,270, minAngle);
  pop();

  //Hour Hand
  push();
  translate(200,220);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);  
  pop();

  push();
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(200,220,260,260,270, hrAngle);
  pop();
}