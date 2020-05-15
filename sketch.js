var start;
var place;
var situation;
var name;

var backgroundImg;

function preload()
{
  backgroundImg = loadImage("Images/menu.PNG");
}

function setup()
{
  createCanvas(1200,800);

  start = new Start();
}


function draw()
{
  background(backgroundImg);
  start.display();
}
