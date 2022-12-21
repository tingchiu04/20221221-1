var face_size = []
var face_x = []
var face_y = []
var face_num = 5

var song
var songIsplay=false //設定此變數為"假"，收到按下滑鼠把變數改為"真"，音樂播放
var amp
var vol=0
var music_btn,mouse_btn,Speech_btn
var musicIsplay=true
var mouseIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("We Wish You A Merry Christmas.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);//將方位度數改為角度模式

  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

 
}
function music_btn_pressed(){  
  song.stop()
  song.play()
  songIsplay = true
  musicIsplay = false
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#00b4d8');
  mouse_btn.style('background-color', 'black');
}




function draw() {
  background("#f2cc8f");   
  
  
  
 push()

    push()
      translate(width/2,height/2)
      noStroke()
      fill("#fb8500")
      ellipse(0,0,350,320) //頭
      ellipse(-130,-140,145) //左耳
      ellipse(130,-140,145) //右耳
        beginShape()  //左腳
        curveVertex(-75,305)
        curveVertex(-90,345)
        curveVertex(-90,355)
        curveVertex(-80,375)
        curveVertex(-60,385)
        curveVertex(-35,385)
        curveVertex(-20,365)
        curveVertex(-15,330)
  
    endShape(CLOSE)
    beginShape()  //右腳
        curveVertex(75,305)
        curveVertex(90,345)
        curveVertex(90,355)
        curveVertex(80,375)
        curveVertex(60,385)
        curveVertex(35,385)
        curveVertex(20,365)
        curveVertex(15,330)
  
    endShape(CLOSE)
  
      fill("#ffeedd")
      ellipse(0,210,270,280) //身體
      
      fill("#fb8500")
      beginShape()  //
        curveVertex(-135,210)
        curveVertex(-20,0)
        curveVertex(20,0)
        curveVertex(135,210)
    endShape(CLOSE)
    beginShape()  
        curveVertex(135,210)
        curveVertex(20,0)
        curveVertex(-20,0)
        curveVertex(-135,210)
    endShape(CLOSE)
  
      fill("#ffeedd")
      ellipse(0,30,305,250) //臉中淺色部分
      
      fill(255)//左眼框
      ellipse(-60,15,70)  
      fill("#ae2012") 
      arc(-60, 20, 80, 80, 160, 320)      
      fill(255)
      arc(-58, 20, 70, 75, 160, 320) 
  
      fill(255)//右眼框
      ellipse(60,15,70) 
      fill("#ae2012")
      arc(60, 20, 80, 80, 220, 20)     
      fill(255)
      arc(58, 20, 70, 75, 220, 20)  
  
      fill("#e56b6f") //左眼珠
      ellipse(-55+map(mouseX,0,width,-12,5),15+map(mouseY,0,height,-7,10),50)
      fill("#c32f27")
      ellipse(-55+map(mouseX,0,width,-12,5),15+map(mouseY,0,height,-7,10),30)
  
      fill("#e56b6f") //右眼珠
      ellipse(55+map(mouseX,0,width,-5,12),15+map(mouseY,0,height,-7,10),50)
      fill("#c32f27")
      ellipse(55+map(mouseX,0,width,-5,12),15+map(mouseY,0,height,-7,10),30)
  
      fill("#ae2012") //鼻子
      ellipse(0,30,15,10)
  
      fill("#5fa8d3") //嘴
      ellipse(0,90,35,30)
  
  
      fill("#fb8500")
      beginShape()  //左手
        curveVertex(-105,125)
        curveVertex(-210,190)
        curveVertex(-200,230)
        curveVertex(-145,215)
        curveVertex(-90,180)
  
    endShape(CLOSE)
    beginShape()  //右手
        curveVertex(105,125)
        curveVertex(210,190)
        curveVertex(200,230)
        curveVertex(145,215)
        curveVertex(90,180)
  
    endShape(CLOSE)

    pop()

}