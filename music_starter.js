
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(13);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let ellipsemap = map(bass, 0, 100, 200, 400);
   
   fill(255);
   ellipse (width/2, height/3, ellipsemap,ellipsemap);
 
   // display "words"
   fill(0);
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}