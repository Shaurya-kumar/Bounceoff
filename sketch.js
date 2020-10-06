var fr,mr;
var go1,go2,go3,go4,go5;


function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 200, 50, 80);
  fr.shapeColor = "green";
  fr.velocityX = -5;
  mr = createSprite(400,200,80,30);
  mr.shapeColor = "green";
  mr.velocity = -5
  go1 = createSprite(100,100,50,50);
  go1.shapeColor = "green";
  go2 = createSprite(200,100,50,50);
  go2.shapeColor = "green";
  go3 = createSprite(300,100,50,50);
  go3.shapeColor = "green";
  go4 = createSprite(400,100,50,50);
  go4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  
  mr.x = World.mouseX;

  mr.y = World.mouseY;
  

  
  if(isTouching(mr,go2)){
 
 mr.shapeColor = "red";
 go2.shapeColor = "red";

} else{

  mr.shapeColor = "green";
  go2.shapeColor = "green";

}

 BounceOff(mr,fr);
  
  drawSprites();
} 

function isTouching(o1,o2){

  if(o1.x-o2.x < o1.width/2 + o2.width / 2 && o2.x -o1.x < o2.width/2 + o1.width/2 &&
    o1.y - o2.y < o1.height/2 + o2.height/2 && o2.y - o1.y < o1.height/2 + o2.height/2)
    {

       return true;

 }
 else {
 
       return false;

 }
}

function BounceOff(o1,o2){

  if(o1.x-o2.x < o1.width/2 + o2.width / 2 && o2.x -o1.x < o2.width/2 + o1.width/2 ) {
   
    o1.velocityX = o1.velocityX * (-1);
    o2.velocityX = o2.velocityX * (-1);
    
   }
   
   if(o1.y-o2.y < o1.height/2 + o2.height/2 && o2.y -o1.y < o2.height/2 + o1.height/2){

    o1.velocityY = o1.velocityY * (-1);
    o2.velocityY = o2.velocityY * (-1);   


   }

}


















