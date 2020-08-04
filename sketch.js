//Create variables here
var dog;
var foodS,foodStock;
var database;
foodS = 40;

function preload()
{
  //load images here
  
 Dog = loadImage("images/dogImg.png");
 DogHappy = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,1,1)
  dog.addImage(Dog)
  Dog.resize(200,200)
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(DogHappy)
    DogHappy.resize(300,300)
    foodS = foodS-1;
  }
  else{
    dog.addImage(Dog);
  }
  

  

  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke(10)
  text("Food Remaining:" + foodS,150,100);
  text("NOTE:"+ "Press Up Arrow key to feed milk to your dog",25,50);

  

}

function readStock(data){
    foodS = data.val();
}
  

function writeStock(){
    if(foodS<=0){
      foodS=0;
    }
  
   

}



