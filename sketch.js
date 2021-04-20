var backgroundImg;
var king,kingImg,princess,princessImg,wolf,wolfImg;
function preload(){
backgroundImg=loadImage("Images/Bg3.jpg")
kingImg=loadImage("Images/King.png")
princessImg=loadImage("Images/Princess.png")
wolfImg=loadImage("Images/wolf.png")
}
function setup(){
createCanvas(1350,800);
 king=createSprite(1200,700);
king.addImage(kingImg);
king.scale=0.4;
 princess=createSprite(75,165);
princess.addImage(princessImg);
princess.scale=0.15;
 /*wall1=createSprite(500,100,250,7);
 wall1.shapeColor="rgb(170,190,60)";
 wall2=createSprite(375,250,7,150);
 wall2.shapeColor="rgb(170,190,60)";
 wall3=createSprite(200,250,7,100);
 wall3.shapeColor="rgb(170,190,60)";*/
var wall = createSprite(800, 350,100,7);
wall.shapeColor="rgb(170,190,60)";
var wall1 = createSprite(700, 180,10,100);
wall1.shapeColor="rgb(170,190,60)";
var wall2 = createSprite(800, 270,8,100);
wall2.shapeColor="rgb(170,190,60)";
var wall3 = createSprite(850, 330,50,10);
wall3.shapeColor="rgb(170,190,60)";
var wall4 = createSprite(400, 680,300,10);
wall4.shapeColor="rgb(170,190,60)";
var wall5 = createSprite(670, 250,155,10);
wall5.shapeColor="rgb(170,190,60)";
var wall6 = createSprite(950, 374,10,255);
wall6.shapeColor="rgb(170,190,60)";
var wall7 = createSprite(890, 260,100,7);
wall7.shapeColor="rgb(170,190,60)";
var wall8 = createSprite(700, 345,10,100);
wall8.shapeColor="rgb(170,190,60)";
var wall9 = createSprite(890, 600,10,100);
wall9.shapeColor="rgb(170,190,60)";
var wall10 = createSprite(720, 500,10,75);
wall10.shapeColor="rgb(170,190,60)";
var wall11 = createSprite(800, 500,50,10);
wall11.shapeColor="rgb(170,190,60)";
var wall12 = createSprite(800, 630,10,75);
wall12.shapeColor="rgb(170,190,60)";
var wall13 = createSprite(920, 200,150,10);
wall13.shapeColor="rgb(170,190,60)";
var wall14 = createSprite(500, 500,225,10);
wall14.shapeColor="rgb(170,190,60)";
var wall15 = createSprite(500, 590,10,70);
wall15.shapeColor="rgb(170,190,60)";
var wall16 = createSprite(690, 600,100,10);
wall16.shapeColor="rgb(170,190,60)";
var wall17 = createSprite(610,265 ,10,125);
wall17.shapeColor="rgb(170,190,60)";
var wall18 = createSprite(640, 400,75,10);
wall18.shapeColor="rgb(170,190,60)";
var wall19 = createSprite(600, 430,100,10);
wall19.shapeColor="rgb(170,190,60)";
var wall20 = createSprite(670, 450,100,10);
wall20.shapeColor="rgb(170,190,60)";
var wall21 = createSprite(600, 550,100,10);
wall21.shapeColor="rgb(170,190,60)";
var wall22 = createSprite(600, 575,10,50);
wall22.shapeColor="rgb(170,190,60)";
var wall23 = createSprite(535, 250,150,10);
wall23.shapeColor="rgb(170,190,60)";
var wall24 = createSprite(425,300,200,10);
wall24.shapeColor="rgb(170,190,60)";
var wall25 = createSprite(200, 355,10,50);
wall25.shapeColor="rgb(170,190,60)";
var wall26 = createSprite(200, 250,150,10);
wall26.shapeColor="rgb(170,190,60)";
var wall27 = createSprite(255,300,20,10);
wall27.shapeColor="rgb(170,190,60)";

}
function draw(){
background(backgroundImg);
drawSprites();
}