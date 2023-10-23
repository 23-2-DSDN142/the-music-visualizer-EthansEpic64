let firstRun = true
let blossom1;
let blossom2;
let mtfuji;
let river;
let fish;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    blossom1 = loadImage('blossomskeleton.png'); //the image of the blossom tree without leaves
    blossom2 = loadImage('blossomflower.png'); //the image of the blossom tree with flowers
    mtfuji = loadImage('mtfuji.png'); //the image of mt fuji
    river = loadImage('river.png'); // the image of the river
    fish = loadImage('fish.png'); //the image of the electrocuted fish
    firstRun = false;
  }
  background(240)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(13);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let ellipsemapdrum = map(drum, 0, 100, 100, 200); //an easy variable I made to map anything to the drums
   let ellipsemapbass = map(bass, 0, 100, 100, 200); //an easy variable I made to map anything to the bass
   let ellipsemapvocal = map(vocal, 0, 100, 100, 200); //an easy variable I made to map anything to the vocals
   let ellipsemapother = map(other, 0,100, 100,200); //an easy variable I made to map anything to the other
   let cloudlight = color(245); //the lightest colour that the clouds can go (very light grey)
   let clouddark = color(55, 64, 74); //the darkest colour (bluey grey)
   let cloudlerp = map(vocal, 0, 100, 0, 1); //mapping the colour to the vocals
   let cloudColour = lerpColor(cloudlight, clouddark, cloudlerp) //variable that will lerp the colour

   fill(188, 0, 45) //Japan flag red
   noStroke();
   ellipse (640,360, ellipsemapdrum+200, ellipsemapdrum+200); //japan rising sun
   
  if(bass >83){ //if bass is above this level
    noFill(); //draw all this \/
    stroke(255, 255, 79);
    strokeWeight(8);
    strokeCap(SQUARE);
    beginShape();
    vertex(200, 30);
    vertex(220, 130);
    vertex(250, 170);
    vertex(226, 220);
    vertex(294, 300);
    vertex(270, 360);
    vertex(310, 420);
    vertex(280, 500);
    vertex(349, 600);
    endShape();
  }
  
   image(mtfuji, 85,140); //mt fuji
   mtfuji.resize(1160,0);

   noStroke();
   fill(51, 97, 44);
   rect (640,675,1280,300); //ground in front of mt fuji


   image(river, 320,525); //river
   river.resize(0,210);

  if(bass >83){ //if bass is above this level
   noFill(); //draw all this \/
   stroke(255, 255, 79);
   strokeWeight(15);
   beginShape();
   vertex(1000, 30);
   vertex(1180, 150);
   vertex(1100, 200);
   vertex(1150, 240);
   vertex(1050, 300);
   vertex(1100, 380);
   vertex(1000, 430);
   vertex(1060, 500);
   vertex(960, 550);
   vertex(1040, 610);
   vertex(935, 670);
   endShape();

   image(fish, 875,640); //shocked fish
   fish.resize(80,0);
  }
   
   fill(cloudColour); //lerp colour for the clouds
   stroke(0);
   strokeWeight(1);
   ellipse (1150, 0, ellipsemapvocal+200,ellipsemapvocal+100); //these ellipses are the clouds
   ellipse (700, 12, ellipsemapvocal+320,ellipsemapvocal+50);
   ellipse (100, 0, ellipsemapvocal+300,ellipsemapvocal+30);
   ellipse (400, 0, ellipsemapvocal+200,ellipsemapvocal+115);
   ellipse (600, 20, ellipsemapvocal+240,ellipsemapvocal+60);
   ellipse (980, 8, ellipsemapvocal+210,ellipsemapvocal+60);
   ellipse (250, 30, ellipsemapvocal+200,ellipsemapvocal+50);
   noStroke();
   rect (700,20,1500,45); //this just partially covers up the stroke of the clouds to make them look less like circles

   if(other <72){
    image(blossom1, -30,80); //blossom tree without flowers
    blossom1.resize(0,620);
   } else{
    image(blossom2, -30,80); //blossom tree with flowers
    blossom2.resize(0,620);
   }
  
}
