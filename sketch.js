const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var thunder;
var thunderCreatedFrame=0;
var umbrella;
var Rain=[];
var maxdrops=100;
function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
}

function setup(){
    canvas = createCanvas(850,400);
    engine = Engine.create();
  world = engine.world;
  umbrella= new Umbrella(200,500);
  if(frameCount%150===0){
    for (var i=0; i<maxdrops; i++){
      Rain.push(new rain(random(0,800),random(0,400)));
    }

  }
}

function draw(){
    background("black");
    Engine.update(engine);

   var rand=Math.round(random(1,4));
   if(frameCount%80===0){
     thunderCreatedFrame=frameCount;
     thunder=createSprite(random(10,370),random(10,30),10,10);
     switch(rand){
       case 1:thumder1.AddImage("1.png");
       break;
       case 2:thumder2.AddImage("2.png");
       break;
       case 3:thumder3.AddImage("3.png");
       break;
       case 4:thumder4.AddImage("4.png");
       break;
      default:break;

     }
     thunder.scale=random(0.3,0.6);
     
   }
   if(thunderCreatedFrame+10===frameCount &&thunder){
     thunder.destroy();
   }





    for (var i=0; i<maxdrops; i++){
      Rain[i].showDrop();
      Rain[i].updateY();
    }
umbrella.display();
drawSprites();
}   

