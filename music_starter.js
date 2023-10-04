
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
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
   
   fill(255);
   ellipse (400, 100, ellipsemapdrum,ellipsemapdrum);
   ellipse (400, 600, ellipsemapbass,ellipsemapbass);
   ellipse (100, 100, ellipsemapvocal,ellipsemapvocal);
   ellipse (100, 600, ellipsemapother,ellipsemapother);
 
   // display "words"
   fill(0);
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
   
}