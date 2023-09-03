const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("icon" , "png");
  pScope.load_image("star" , "png");
  pScope.load_image("stars" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 0, 0, 0);  //lets us draw the whole circle background, ignoring the boundaries

  // var layer1 = new PLayer(faces);
  // layer1.mode( SWIRL(5) );
  // layer1.set_boundary( 200, 1000 );

  var layer1 = new PLayer(star_sign);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 200, 1000 );

  // var layer2 = new Player(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 600 );
  
  var layer3 = new PLayer(magic_sign);
  layer3.mode( RING );
  //layer3.set_boundary( 0, 300 );

}

function faces(x, y, animation, pScope){
  
  scale(animation.wave(8));//frame*2

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}

function magic_sign(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

fill(171, 108, 0);
arc(x,y,100,600,backgroundArcStart,backgroundArcEnd);

scale(0.3);
pScope.draw_image("icon",x,y);
}

function star_sign(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

push();
noFill();
stroke(255, 215, 0);//golden
scale(1);
rotate(360*animation.frame);
scale(2*animation.wave());
beginShape();
vertex(-10, 10);
vertex(0, 35);
vertex(10, 10);
vertex(35, 0);
vertex(10, -8);
vertex(0, -35);
vertex(-10, -8);
vertex(-35, 0);
vertex(-10, 10);
endShape();
// scale(0.2);
// var starx = 360*animation.wave(2)*400;
// rotate(360*animation.frame);
// scale(2*animation.wave());
// pScope.draw_image("star",x,y);
pop();
scale(0.1);
scale(2*animation.wave(2));
rotate(360*animation.frame);
var starsx = animation.wave(2)*1200;
pScope.draw_image("stars",starsx,y);
}