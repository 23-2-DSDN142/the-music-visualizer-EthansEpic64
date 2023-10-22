
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(240)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(13);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let ellipsemapdrum = map(drum, 0, 100, 100, 200);
   let ellipsemapbass = map(bass, 0, 100, 100, 200);
   let ellipsemapvocal = map(vocal, 0, 100, 100, 200);
   let ellipsemapother = map(other, 0,100, 100,200);
   let cloudlight = color(245);
   let clouddark = color(55, 64, 74);
   let cloudlerp = map(vocal, 0, 100, 0, 1);
   let cloudColour = lerpColor(cloudlight, clouddark, cloudlerp)

   fill(188, 0, 45)
   noStroke();
   ellipse (644,360, ellipsemapdrum+200, ellipsemapdrum+200);
   
   fill(cloudColour);
   stroke(0);
   ellipse (1150, 0, ellipsemapvocal+200,ellipsemapvocal+100); //these ellipses are the clouds
   ellipse (700, 12, ellipsemapvocal+320,ellipsemapvocal+50);
   ellipse (100, 0, ellipsemapvocal+300,ellipsemapvocal+30);
   ellipse (400, 0, ellipsemapvocal+200,ellipsemapvocal+115);
   ellipse (600, 20, ellipsemapvocal+240,ellipsemapvocal+60);
   ellipse (980, 8, ellipsemapvocal+210,ellipsemapvocal+60);
   ellipse (250, 30, ellipsemapvocal+200,ellipsemapvocal+50);
   noStroke();
   rect (700,20,1500,45); //this just partially covers up the stroke of the clouds to make them look less like circles
   
   
}